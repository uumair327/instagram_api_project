const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const axios = require('axios');

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Instagram OAuth Configuration
const INSTAGRAM_CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID;
const INSTAGRAM_CLIENT_SECRET = process.env.INSTAGRAM_CLIENT_SECRET;
const REDIRECT_URI = 'http://localhost:3000/auth/instagram/callback';

// Instagram OAuth Routes
app.get('/auth/instagram', (req, res) => {
  const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${INSTAGRAM_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user_profile,user_media,instagram_basic,instagram_content_publish&response_type=code`;
  res.redirect(authUrl);
});

app.get('/auth/instagram/callback', async (req, res) => {
  const { code } = req.query;
  
  try {
    // Exchange code for access token
    const tokenResponse = await axios.post('https://api.instagram.com/oauth/access_token', {
      client_id: INSTAGRAM_CLIENT_ID,
      client_secret: INSTAGRAM_CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: REDIRECT_URI,
      code: code
    });

    const { access_token, user_id } = tokenResponse.data;

    // Get user profile using Instagram Graph API
    const profileResponse = await axios.get(`https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${access_token}`);
    
    // Get user media
    const mediaResponse = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,comments_count&access_token=${access_token}`);

    // Store the access token in a secure HTTP-only cookie
    res.cookie('instagram_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });

    res.redirect('http://localhost:3000/profile');
  } catch (error) {
    console.error('Instagram OAuth Error:', error.response?.data || error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

// API Routes
app.get('/api/user/profile', async (req, res) => {
  try {
    const access_token = req.cookies.instagram_token;
    if (!access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const response = await axios.get(`https://graph.instagram.com/me?fields=id,username,account_type,media_count&access_token=${access_token}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

app.get('/api/user/media', async (req, res) => {
  try {
    const access_token = req.cookies.instagram_token;
    if (!access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const response = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,comments_count&access_token=${access_token}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching media:', error);
    res.status(500).json({ error: 'Failed to fetch media' });
  }
});

app.get('/api/media/:mediaId/comments', async (req, res) => {
  try {
    const access_token = req.cookies.instagram_token;
    if (!access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { mediaId } = req.params;
    const response = await axios.get(`https://graph.instagram.com/${mediaId}/comments?access_token=${access_token}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.post('/api/media/:mediaId/comments', async (req, res) => {
  try {
    const access_token = req.cookies.instagram_token;
    if (!access_token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { text } = req.body;
    const { mediaId } = req.params;

    // Post comment using Instagram Graph API
    const response = await axios.post(`https://graph.instagram.com/${mediaId}/comments`, {
      message: text,
      access_token: access_token
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error posting comment:', error.response?.data || error);
    res.status(500).json({ error: 'Failed to post comment' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

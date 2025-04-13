import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import axios from 'axios';

const MediaFeed = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState({});

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user/media');
        setMedia(response.data);
        
        // Fetch comments for each media item
        const commentsPromises = response.data.map(async (item) => {
          try {
            const commentsResponse = await axios.get(`http://localhost:5000/api/media/${item.id}/comments`);
            return { [item.id]: commentsResponse.data.data || [] };
          } catch (error) {
            console.error(`Error fetching comments for media ${item.id}:`, error);
            return { [item.id]: [] };
          }
        });

        const commentsResults = await Promise.all(commentsPromises);
        const commentsMap = commentsResults.reduce((acc, curr) => ({ ...acc, ...curr }), {});
        setComments(commentsMap);
      } catch (error) {
        console.error('Error fetching media:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const handleCommentSubmit = async (mediaId) => {
    try {
      await axios.post(`http://localhost:5000/api/media/${mediaId}/comments`, {
        text: commentText,
      });
      
      // Refresh comments for this media item
      const commentsResponse = await axios.get(`http://localhost:5000/api/media/${mediaId}/comments`);
      setComments(prev => ({
        ...prev,
        [mediaId]: commentsResponse.data.data || []
      }));
      
      setCommentText('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {media.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.media_url}
                  alt={item.caption || 'Instagram post'}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {new Date(item.timestamp).toLocaleDateString()}
                  </Typography>
                  {item.caption && (
                    <Typography variant="body1" paragraph>
                      {item.caption}
                    </Typography>
                  )}
                  
                  {/* Comments Section */}
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Comments ({comments[item.id]?.length || 0})
                    </Typography>
                    <List dense>
                      {comments[item.id]?.map((comment, index) => (
                        <React.Fragment key={index}>
                          <ListItem>
                            <ListItemText
                              primary={comment.text}
                              secondary={new Date(comment.timestamp).toLocaleDateString()}
                            />
                          </ListItem>
                          {index < comments[item.id].length - 1 && <Divider />}
                        </React.Fragment>
                      ))}
                    </List>
                    
                    <Box sx={{ mt: 2 }}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        size="small"
                      />
                      <Button
                        variant="contained"
                        onClick={() => handleCommentSubmit(item.id)}
                        sx={{ mt: 1 }}
                      >
                        Comment
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default MediaFeed; 
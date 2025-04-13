# Instagram API Integration

A MERN stack application that integrates with Instagram API to fetch and display user information, media, and enable commenting functionality.

## Features

- Instagram OAuth authentication
- User profile display
- Media feed with posts and stories
- Comment functionality on posts
- Modern UI with Material-UI components
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
- Instagram Business/Creator account
- Facebook Developer account

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/instagram-api-integration.git
cd instagram-api-integration
```

2. Install dependencies:
```bash
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
cd ..
```

3. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your credentials:
- Get your Instagram Client ID and Secret from [Facebook Developers](https://developers.facebook.com/)
- Set up your MongoDB connection string
- Generate a secure JWT secret

5. Start the development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Configuration

1. Create a Facebook Developer account
2. Create a new app and add Instagram Basic Display product
3. Configure OAuth redirect URI: `http://localhost:3000/auth/instagram/callback`
4. Add your Instagram account as a test user
5. Get your App ID and App Secret

## Project Structure

```
instagram-api-integration/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # React components
├── server/                # Express backend
│   └── index.js          # Main server file
├── .env                  # Environment variables
├── .env.example          # Example environment variables
├── .gitignore           # Git ignore file
└── package.json         # Project dependencies
```

## API Endpoints

- `GET /auth/instagram` - Initiate Instagram OAuth
- `GET /auth/instagram/callback` - Handle OAuth callback
- `GET /api/user/profile` - Get user profile
- `GET /api/user/media` - Get user media
- `GET /api/media/:mediaId/comments` - Get comments for a post
- `POST /api/media/:mediaId/comments` - Post a comment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Instagram Basic Display API](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Material-UI](https://mui.com/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)

## Screenshots

[Add project screenshots here]
Example: ![Project Screenshot](https://example.com/screenshot.png)

## Preview

[Add project preview image here]
Example: ![Project Preview](https://example.com/preview.png)

## Live Demo

👉 [Add your live demo URL here]

## Author

[Your Name]  
📧 [Your Email]  
🔗 [Your LinkedIn Profile]

---

## 🚀 Features

- ✅ Mocked Login with Instagram
- ✅ Display user profile (name, username, picture, bio, website)
- ✅ Fetch and display user media feed (posts)
- ✅ Reply to comments on each post
- ✅ Stylish and responsive UI (Instagram-like layout)

---

## 🧑‍💻 Tech Stack

- **Frontend**: React (Vite), HTML, CSS
- **Backend**: Node.js, Express
- **Styling**: Custom CSS
- **Mock Data**: Used in place of real Instagram API due to SMS verification limitations

## 💡 How to Run Locally

### 🔧 Backend (Server)

1. Open terminal
2. Navigate to `/server`
3. Run:
   ```bash
   npm install
   node index.js
   ```
4. Server will run on `http://localhost:5000`

### 🌐 Frontend (Client)

1. Open a second terminal
2. Navigate to `/client`
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. App runs at `http://localhost:5173`

---

## 📸 Preview

![Screenshot](https://i.ibb.co/pv6XSmrG/ironman.webp)

---

## 📦 Mocking the API

Due to issues with receiving SMS OTP from Meta, the actual Instagram Graph API could not be integrated. Instead, mock user data and media feeds are used to simulate API responses for the assessment.

---

## 📹 Demo Video

👉 [Add Loom or YouTube link here]

---

## 🌍 Live Demo

👉 [https://instagram-api-project.vercel.app/]

---

## 🧠 Author

**Nithish H**  
📧 [hnithish1399@gmail.com]  
🔗 [https://www.linkedin.com/in/nithish-h-07a060248/]

---

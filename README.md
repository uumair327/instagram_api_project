# Instagram API Integration

<div align="center">
  <img src="https://example.com/preview.png" alt="Project Preview" width="800"/>
</div>

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

A production-ready MERN stack application that integrates with Instagram API to fetch and display user information, media, and enable commenting functionality. This project demonstrates modern web development practices and API integration.

## Features

- 🔐 Instagram OAuth authentication
- 👤 User profile display with real-time updates
- 📸 Media feed with posts, stories, and reels
- 💬 Comment functionality with real-time updates
- 🎨 Modern UI with Material-UI components
- 📱 Fully responsive design
- 🔄 Real-time data synchronization
- 🔒 Secure authentication and authorization
- ⚡ Optimized performance

## Tech Stack

### Frontend
- React.js
- Material-UI
- Axios
- React Router
- Context API

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Instagram Graph API

### Development Tools
- Git
- VS Code
- Postman
- Chrome DevTools

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/uumair327/instagram_api_project.git
cd instagram_api_project
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

3. Set up environment variables:
```bash
# Copy example environment file
cp .env.example .env
```

4. Update the `.env` file with your credentials:
```env
PORT=5000
INSTAGRAM_CLIENT_ID=your_instagram_client_id
INSTAGRAM_CLIENT_SECRET=your_instagram_client_secret
MONGODB_URI=mongodb://localhost:27017/instagram_api
JWT_SECRET=your_jwt_secret
```

## Configuration

1. Create a Facebook Developer account
2. Create a new app and add Instagram Basic Display product
3. Configure OAuth redirect URI: `http://localhost:3000/auth/instagram/callback`
4. Add your Instagram account as a test user
5. Get your App ID and App Secret

## Usage

Start the development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/instagram` | GET | Initiate Instagram OAuth |
| `/auth/instagram/callback` | GET | Handle OAuth callback |
| `/api/user/profile` | GET | Get user profile |
| `/api/user/media` | GET | Get user media |
| `/api/media/:mediaId/comments` | GET | Get comments for a post |
| `/api/media/:mediaId/comments` | POST | Post a comment |

## Project Structure

```
instagram_api_project/
├── client/                 # React frontend
│   ├── public/            # Static files
│   └── src/               # React components
│       ├── components/    # Reusable components
│       ├── context/       # Context providers
│       ├── hooks/         # Custom hooks
│       └── utils/         # Utility functions
├── server/                # Express backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/           # Database models
│   └── routes/           # API routes
├── .env                  # Environment variables
├── .env.example          # Example environment variables
├── .gitignore           # Git ignore file
└── package.json         # Project dependencies
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

**Umair Ansari**  
📧 [Your Email]  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/uumair327)  
🐦 [Twitter](https://twitter.com/uumair327)  
💻 [GitHub](https://github.com/uumair327)

---

<div align="center">
  <sub>Built with ❤️ by Umair Ansari</sub>
</div>

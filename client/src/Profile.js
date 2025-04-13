import React from "react";
import MediaFeed from "./MediaFeed";

const mockUser = {
  username: "nithish_titan",
  full_name: "Nithish Hebbarbail",
  profile_picture: "https://i.ibb.co/pv6XSmrG/ironman.webp", 
  bio: "Full Stack Dev | Trader | Explorer 🌍",
  website: "https://yourportfolio.com",
};

const Profile = () => {
  return (
    <div className="profile-container">
      <img
        src={mockUser.profile_picture}
        alt="Profile"
        className="profile-pic"
      />

      <h2>{mockUser.full_name}</h2>
      <p className="username">@{mockUser.username}</p>
      <p className="bio">{mockUser.bio}</p>
      <a href={mockUser.website} target="_blank" rel="noreferrer">
        {mockUser.website}
      </a>

      <h3>Your Instagram Posts</h3>

      {/* 👇 Media Feed Section */}
      <MediaFeed />
    </div>
  );
};

export default Profile;

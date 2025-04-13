import React, { useState } from "react";

const MediaFeed = () => {
  const [posts, setPosts] = useState([
    {
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Exploring the mountains 🏔️",
      comments: ["Wow!", "Amazing place!"],
      newComment: ""
    },
    {
      imageUrl: "https://i.ibb.co/gGdhMZd/LNC.jpg",
      caption: "Coding late nights 💻🌙",
      comments: ["Same bro 😎", "Legend!"],
      newComment: ""
    }
  ]);

  const handleCommentChange = (index, value) => {
    const updatedPosts = [...posts];
    updatedPosts[index].newComment = value;
    setPosts(updatedPosts);
  };

  const handleAddComment = (index) => {
    const updatedPosts = [...posts];
    const comment = updatedPosts[index].newComment.trim();

    if (comment) {
      updatedPosts[index].comments.push(comment);
      updatedPosts[index].newComment = "";
      setPosts(updatedPosts);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {posts.map((post, index) => (
        <div key={index} style={{ marginBottom: "60px", maxWidth: "600px", margin: "0 auto" }}>
          <img src={post.imageUrl} alt={post.caption} width="100%" style={{ borderRadius: "8px" }} />
          
          <div style={{ textAlign: "left", marginTop: "10px" }}>
            <p><strong>{post.caption}</strong></p>
            <p><strong>Comments:</strong></p>
            <ul style={{ paddingLeft: "20px" }}>
              {post.comments.map((comment, i) => (
                <li key={i}>{comment}</li>
              ))}
            </ul>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              <input
                type="text"
                value={post.newComment}
                onChange={(e) => handleCommentChange(index, e.target.value)}
                placeholder="Write a reply..."
                style={{ flex: 1, padding: "5px", borderRadius: "4px", border: "1px solid #ccc" }}
              />
              <button
                onClick={() => handleAddComment(index)}
                style={{ padding: "5px 10px", backgroundColor: "#1877F2", color: "white", border: "none", borderRadius: "4px" }}
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaFeed;

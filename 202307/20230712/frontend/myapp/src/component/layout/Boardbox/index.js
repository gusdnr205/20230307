import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Boardd = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/write/viewall", {
        withCredentials: true
      });
      console.log(response.data);
      setPosts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (postId, updatedData) => {
    try {
      const response = await axios.put(`/write/${postId}`, updatedData, {
        withCredentials: true
      });
      console.log(response.data);
      // Handle the success message or perform any necessary updates
      fetchData(); // Fetch the updated data from the server
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const response = await axios.delete(`/write/${postId}`, {
        withCredentials: true
      });
      console.log(response.data);
      // Handle the success message or perform any necessary updates
      fetchData(); // Fetch the updated data from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {posts.map(post => (
        <PostComponent
          key={post.id}
          post={post}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

const PostComponent = ({ post, onEdit, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(post.title);
  const [updatedContent, setUpdatedContent] = useState(post.content);

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleSave = () => {
    const updatedData = { title: updatedTitle, content: updatedContent };
    onEdit(post.id, updatedData);
    setEditing(false);
  };

  const handleDelete = () => {
    onDelete(post.id);
  };

  return (
    <div>
      {editing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          ></textarea>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleEditToggle}>Cancel</button>
        </>
      ) : (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={handleEditToggle}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Boardd;

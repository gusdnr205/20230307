import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make the POST request using Axios
    axios.post('http://127.0.0.1:4000/write', { title, content })
      .then(response => {
        // Handle the response if needed
        console.log(response.data);
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });

    // Reset the form
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label> <br />
      <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />

      <label htmlFor="content">Text</label> <br />
      <input type="text" id="content" name="content" value={content} onChange={(e) => setContent(e.target.value)} />
      <br />

      <button type="submit">Register post</button>
    </form>
  );
};

export default MyForm;

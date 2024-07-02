// components/AnimationManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AnimationManagement = () => {
  const [animations, setAnimations] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const fetchAnimations = async () => {
    try {
        const response = await axios.get('http://localhost:4000/api/animations');
        console.log(response.data); // Or whatever logic to handle the response
    } catch (error) {
        console.error('Failed to fetch animations:', error);
    }
};

  const uploadAnimation = async () => {
    await axios.post('http://localhost:4000/api/animations/upload', { name, description, url });
    fetchAnimations();
  };

  useEffect(() => {
    fetchAnimations();
  }, []);

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="text" placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} />
      <button onClick={uploadAnimation}>Upload Animation</button>
      <ul>
        {animations.map(animation => (
          <li key={animation._id}>{animation.name} - {animation.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnimationManagement;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Videos() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput('');
    navigate(`/videos/${input}`);
  };
  return (
    <>
      <div>Video!!</div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Video id :'
          onChange={handleChange}
          value={input}
        />
      </form>
    </>
  );
}

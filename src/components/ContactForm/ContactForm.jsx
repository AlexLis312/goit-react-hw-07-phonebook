import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!name.trim() || !number.trim()) {
      alert('Введите имя и номер');
      return;
    }

    onSubmit({ name: name.trim(), number: number.trim() });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="name"
      />
      <input
        value={number}
        onChange={e => setNumber(e.target.value)}
        placeholder="number"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;

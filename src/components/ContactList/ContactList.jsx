import React from 'react';
import './ContactList.css';

const ContactList = ({ contacts, handleRemove }) => (
  <ul>
    {contacts.map(entry => (
      <li key={entry.id}>
        {entry.name} <span>{entry.number}</span>
        <button onClick={() => handleRemove(entry.id)}>❌</button>
      </li>
    ))}
  </ul>
);

export default ContactList;

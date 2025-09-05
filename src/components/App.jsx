import React, { useEffect } from 'react';
import './App.css';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  deleteContact,
  fetchContacts,
  setFilter,
} from '../store/phonebookSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.phonebook.contacts.items);
  const isLoading = useSelector(state => state.phonebook.contacts.isLoading);
  const error = useSelector(state => state.phonebook.contacts.error);
  const filter = useSelector(state => state.phonebook.filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  const handleAdd = ({ name, number }) => {
    dispatch(addContact({ name, number }));
  };

  const handleRemove = id => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="app-container">
      <div className="section">
        <ContactForm onSubmit={handleAdd} />
      </div>
      <div className="section">
        <Filter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div>
        {isLoading && <p>⏳ Загрузка...</p>}
        {error && <p style={{ color: 'red' }}>❌ {error}</p>}
      </div>
      <div className="section">
        <ContactList contacts={visibleContacts} handleRemove={handleRemove} />
      </div>
    </div>
  );
};

import React from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import SearchContactByName from '../SearchContact/SearchContact';
import { Container } from './App.Styled';

export default function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <AddContactForm />
      <h2>Contacts</h2>
      <SearchContactByName title="Find contact by name" />

      <ContactList />
    </Container>
  );
}

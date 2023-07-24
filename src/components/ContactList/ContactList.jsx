import React from 'react';
import Notification from 'components/Notification/Notification';

import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';
import {
  List,
  ListItem,
  Button,
} from 'components/ContactList/ContactList.Styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    if (normalizedFilter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = filterContacts();
  
  return (
    <div>
      {filteredContacts.length === 0 && filter === '' ? (
        <Notification message="No contacts in your phonebook" />
      ) : filteredContacts.length === 0 && filter !== '' ? (
        <Notification message={`No contacts with this name "${filter}"`} />
      ) : (
        <List>
          {filteredContacts.map(contact => {
            return (
              <ListItem key={contact.id}>
                {contact.name}: {contact.number}
                <Button onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
}

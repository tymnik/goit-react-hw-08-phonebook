import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../store/reducer';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../store/selectors';

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ name, number, id, createdAt }) => (
        <ContactListItem
          key={id}
          contact={{ name, number, id, createdAt }}
          onDelete={() => handleDeleteContact(id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;

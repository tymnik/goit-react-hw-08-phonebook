import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { selectVisibleContacts } from '../../store/selectors';

const ContactList = () => {
 const filteredContacts = useSelector(selectVisibleContacts);
 const dispatch = useDispatch();

  // const handleDeleteContact = contactId => {
  //   dispatch(deleteContact(contactId));
  // };

  return (
    <ul className={styles.contactList}>
      {filteredContacts.map(({ id, name, number, phone }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number || phone}
        />
      ))}
    </ul>
  );
};

export default ContactList;

import React, { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';
import styles from './ContactList.module.css';
import { selectVisibleContacts } from '../../store/selectors';
import { fetchContacts } from 'store/contacts/operations';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useAuth();
  const filteredContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.contactList}>
      {contacts.isLoading && <Loader />}
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

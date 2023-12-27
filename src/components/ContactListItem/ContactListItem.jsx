import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.contactItemBlock}>
        {name}:{' '}
        <a href={`tel:${number}`} className={styles.callLink}>
          {number}
        </a>{' '}
      </div>
      <button className={styles.delBtn} onClick={handleDeleteContact}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;

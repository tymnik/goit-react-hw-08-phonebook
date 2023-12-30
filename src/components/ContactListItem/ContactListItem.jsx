import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contacts/operations';
import styles from './ContactListItem.module.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { orange } from '@mui/material/colors';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const color = orange[500];

  return (
    <li className={styles.listItem}>
      <div className={styles.contactItemBlock}>
        {' '}
        <AccountBoxIcon sx={{ fontSize: 40, color }} />
        {name}:{' '}
        <a href={`tel:${number}`} className={styles.callLink}>
          {number}
        </a>{' '}
      </div>
      <Button
        variant="filled"
        onClick={handleDeleteContact}
        size='small'
        sx={{ color }}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactListItem;

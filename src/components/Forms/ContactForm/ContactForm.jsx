import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { addContact } from 'store/contacts/operations';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';
import Button from '@mui/material/Button';
import { orange } from '@mui/material/colors';

const ContactForm = () => {
  const { contacts } = useAuth();
  const items = contacts || [];
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const addNewContact = e => {
    e.preventDefault();

    const isDuplicate = items.some(
      existingContact =>
        existingContact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      toast.warn(`${name} is already in contacts.`, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    } else {
      const newContact = {
        name: name,
        number: number,
      };
      dispatch(addContact(newContact));
      setName('');
      setNumber('');
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const color = orange[500];

  return (
    <form onSubmit={addNewContact} className={styles.inputForm}>
      <label className={styles.inputLabel}>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </label>
      <label className={styles.inputLabel}>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          required
          className={styles.inputField}
        />
      </label>
      <Button type="submit" sx={{ color }}>
        Add Contact
      </Button>
    </form>
  );
};

export default ContactForm;

import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { addContact } from 'store/contacts/operations';
import { useDispatch } from 'react-redux';
import styles from './ContactForm.module.css';

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
      alert(`${name} is already in contacts.`);
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
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          className={styles.inputField}
        />
      </label>
      <button type="submit" className={styles.addBtn}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/Forms/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'store/contacts/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  const { auth, contacts } = useSelector(state => state);
  const lengthContacts = contacts.items.length >= 1;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    auth.isLoggedIn && (
      <div>
        <h2>Phonebook</h2>
        <ContactForm />
        {lengthContacts && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    )
  );
};

export default Contacts;

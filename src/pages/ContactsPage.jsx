import ContactForm from 'components/Forms/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;

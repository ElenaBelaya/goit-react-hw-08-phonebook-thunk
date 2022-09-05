import { Li } from './ContactList.Styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelector';
import ContactItem from '../contactItem/ContactItem';
const ContactList = () => {
  const value = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getVisibleContacts = () => {
    const notmalisedFilter = value.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(notmalisedFilter)
    );

    return visibleContacts;
  };

  return contacts !== [] && contacts !== undefined ? (
    <ul>
      {getVisibleContacts().map(contact => (
        <Li key={contact.id}>
          <ContactItem contact={contact} />
        </Li>
      ))}
    </ul>
  ) : (
    <span>There are no contacts</span>
  );
};

export default ContactList;

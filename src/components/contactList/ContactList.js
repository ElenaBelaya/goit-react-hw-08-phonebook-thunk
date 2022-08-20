import { DeleteButton, Li } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelector';
import { removeContacts } from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const value = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);
  const dispartch = useDispatch();

  const getVisibleContacts = () => {
    const notmalisedFilter = value.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(notmalisedFilter)
    );

    return visibleContacts;
  };

  const onDeleteContact = id => {
    dispartch(removeContacts(id));
    Notiflix.Notify.success('Сontact removed from list');
  };

  return (
    <ul>
      {getVisibleContacts().map(({ id, name, phone }) => (
        <Li key={id}>
          {name}: {phone}
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </Li>
      ))}
    </ul>
  );
};

export default ContactList;

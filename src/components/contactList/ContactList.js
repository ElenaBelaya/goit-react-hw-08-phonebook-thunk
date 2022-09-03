import { DeleteButton, Li } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import { selectContacts, selectFilter } from 'redux/contacts/contactsSelector';
import contactsOperations from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const { removeContacts, updateContacts } = contactsOperations;
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

  const onUpdateContact = (id, contact) => {
    dispartch(updateContacts(id));
    console.log(contact);
  };

  return contacts !== [] && contacts !== undefined ? (
    <ul>
      {getVisibleContacts().map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
          <button type="button" onClick={() => onUpdateContact(id)}>
            Edit
          </button>
        </Li>
      ))}
    </ul>
  ) : (
    <span>There are no contacts</span>
  );
};

export default ContactList;

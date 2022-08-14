import { DeleteButton, Li } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/items';

const ContactList = () => {
  const value = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts.items);
  const dispartch = useDispatch();

  const getVisibleContacts = () => {
    if (contacts !== []) {
      const notmalisedFilter = value.toLowerCase();
      const visibleContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(notmalisedFilter)
      );
      return visibleContacts;
    }
  };

  const onDeleteContact = id => {
    dispartch(deleteContact(id));
  };

  return (
    <ul>
      {getVisibleContacts().map(({ id, name, number }) => (
        <Li key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </Li>
      ))}
    </ul>
  );
};

export default ContactList;

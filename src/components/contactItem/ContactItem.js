import { DeleteButton } from './ContactItem.Styled';
import Notiflix from 'notiflix';
import contactsOperations from 'redux/contacts/contactsOperations';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

const ContactItem = contact => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, name, number } = contact.contact;
  const { removeContacts } = contactsOperations;

  const onDeleteContact = id => {
    dispatch(removeContacts(id));
    Notiflix.Notify.success('Сontact removed from list');
  };

  return (
    <>
      {name}: {number}
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        <AiFillDelete />
        Delete
      </DeleteButton>
      <button
        type="button"
        onClick={() =>
          navigate(`/contacts/${id}`, {
            state: { id: id, name: name, number: number },
          })
        }
      >
        <AiFillEdit />
        Edit
      </button>
    </>
  );
};

export default ContactItem;

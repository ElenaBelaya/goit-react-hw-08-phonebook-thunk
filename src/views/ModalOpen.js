import shortid from 'shortid';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  FormStyled,
  FieldStyled,
  ButtonSubmit,
  TitleInput,
} from './ModalOpen.styled';
import contactsOperations from 'redux/contacts/contactsOperations';

const nameId = shortid();
const phoneId = shortid();

const ModalOpen = () => {
  const location = useLocation();
  const id = location.state.id;
  const previousName = location.state.name;
  const previousNumber = location.state.number;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { updateContacts } = contactsOperations;

  const onClose = () => {
    navigate('/contacts');
  };

  const updateContact = async contact => {
    const newContact = { id, ...contact };

    dispatch(updateContacts(newContact));
    onClose();
  };

  return (
    <Formik
      initialValues={{ name: previousName, number: previousNumber }}
      onSubmit={updateContact}
    >
      {({ isSubmitting }) => (
        <FormStyled>
          <label htmlFor={nameId}>
            <TitleInput>Name</TitleInput>
            <FieldStyled
              id={nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor={phoneId}>
            <TitleInput>Phone</TitleInput>
            <FieldStyled
              id={phoneId}
              type="text"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <ButtonSubmit type="submit" disabled={isSubmitting}>
            Save
          </ButtonSubmit>
          <button type="button" onClick={() => onClose()}>
            Close
          </button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ModalOpen;

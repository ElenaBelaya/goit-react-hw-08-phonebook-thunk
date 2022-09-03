import { Formik } from 'formik';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';

const editContact = () => {
  const dispatch = useDispatch();
  const { updateContacts } = contactsOperations;
  const CloseModal = () => Navigate('/contacts');
  const updateContact = async values => {};
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={updateContact}>
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
          <button onClick={CloseModal}>Close</button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default editContact;

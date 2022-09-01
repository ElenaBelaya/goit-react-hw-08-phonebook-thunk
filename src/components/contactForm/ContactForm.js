import shortid from 'shortid';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import {
  FormStyled,
  FieldStyled,
  ButtonSubmit,
  TitleInput,
} from './ContactForm.Styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContacts } from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/contactsSelector';

const nameId = shortid();
const phoneId = shortid();

const ContactForm = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const addContact = (values, id) => {
    console.log(values);
    const newContact = { id, ...values };
    const found = contacts.some(function (contact) {
      return contact.name.toLowerCase() === values.name.toLowerCase();
    });
    const resetForm = () => {
      values.name = '';
      values.phone = '';
    };
    if (!found) {
      dispatch(addContacts(newContact));
      resetForm();
      Notiflix.Notify.success('Сontact added successfully');
    } else {
      alert(`${values.name} is already in contacts`);
    }
  };

  const handleSubmit = async (value, { setSubmitting }) => {
    await addContact(value, shortid.generate());
    setSubmitting(false);
  };
  return (
    <Formik initialValues={{ name: '', phone: '' }} onSubmit={handleSubmit}>
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
              name="phone"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <ButtonSubmit type="submit" disabled={isSubmitting}>
            Add contact
          </ButtonSubmit>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;

import shortid from 'shortid';
import { Formik } from 'formik';
import Notiflix from 'notiflix';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import { FormStyled, FieldStyled, TitleInput } from './ContactForm.Styled';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';
import { selectContacts } from 'redux/contacts/contactsSelector';

const nameId = shortid();
const phoneId = shortid();

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const ContactForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getContacts, addContacts } = contactsOperations;

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch, getContacts]);
  const contacts = useSelector(selectContacts);

  const addContact = (values, id) => {
    const newContact = { id, ...values };
    const found = contacts.some(function (contact) {
      return contact.name.toLowerCase() === values.name.toLowerCase();
    });
    const resetForm = () => {
      values.name = '';
      values.number = '';
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
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <FormStyled>
          <label htmlFor={nameId}>
            <TitleInput>Name</TitleInput>
            <FieldStyled
              id={nameId}
              type="text"
              name="name"
              placeholder="Please, enter your name"
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
              placeholder="Place for phone number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />

          <Button
            size="small"
            className={classes.margin}
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
          >
            Add contact
          </Button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;

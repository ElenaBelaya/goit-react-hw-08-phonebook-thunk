import shortid from 'shortid';
import { Formik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  FormStyled,
  FieldStyled,
  TitleInput,
  Layout,
} from './ModalOpen.styled';
import contactsOperations from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/contacts/contactsSelector';

const nameId = shortid();
const phoneId = shortid();

const ModalOpen = () => {
  const contacts = useSelector(selectContacts);
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
    const found = contacts.some(function (contact) {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (!found) {
      dispatch(updateContacts(newContact));
      onClose();
    } else {
      alert(`${newContact.name} is already in contacts`);
    }
  };

  return (
    <Layout>
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
            <Stack spacing={7} direction="row" justifyContent="center">
              <Button
                size="small"
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
              >
                Save
              </Button>
              <Button
                size="small"
                variant="contained"
                type="button"
                onClick={() => onClose()}
              >
                Close
              </Button>
            </Stack>
          </FormStyled>
        )}
      </Formik>
    </Layout>
  );
};

export default ModalOpen;

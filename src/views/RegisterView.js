import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import { FormBox, Main, Label, Button, Input } from './RegisterView.Styled';
import authOperations from '../redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const nameId = shortid();
const emailId = shortid();
const passwordId = shortid();

const RegisterView = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);
  const handleSubmit = credentials => {
    dispatch(authOperations.register(credentials));
    if (error) {
      return alert('Еhis name already exists. Please try again');
    }
  };

  return (
    <Main>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <FormBox autoComplete="off">
          <Label htmlFor={nameId}>
            name
            <Input
              id={nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></Input>
          </Label>
          <Label htmlFor={emailId}>
            mail
            <Input id={emailId} type="email" name="email" required></Input>
          </Label>
          <Label htmlFor={passwordId}>
            password
            <Input id={passwordId} type="password" name="password"></Input>
          </Label>
          <Button type="submit">Submit</Button>
        </FormBox>
      </Formik>
    </Main>
  );
};

export default RegisterView;

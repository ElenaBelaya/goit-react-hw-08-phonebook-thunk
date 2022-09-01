import shortid from 'shortid';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { FormBox, Main, Label, Input, Button } from './LoginView.Styled';

const emailId = shortid();
const passwordId = shortid();

const LoginView = () => {
  const dispatch = useDispatch();
  const handleSubmit = (credentials, { resetForm }) => {
    dispatch(authOperations.logIn(credentials));
    resetForm({ values: '' });
  };

  return (
    <Main>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <FormBox autoComplete="off">
            <Label htmlFor={emailId}>
              mail
              <Input id={emailId} type="email" name="email" />
            </Label>
            <Label htmlFor={passwordId}>
              password
              <Input id={passwordId} type="password" name="password" />
            </Label>

            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </FormBox>
        )}
      </Formik>
    </Main>
  );
};

export default LoginView;

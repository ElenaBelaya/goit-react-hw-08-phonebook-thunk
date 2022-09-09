import shortid from 'shortid';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { FormBox, Main, Label, Input, Button } from './LoginView.Styled';

const emailId = shortid();
const passwordId = shortid();

const LoginView = () => {
  //const error = useSelector(authSelectors.getError);
  //const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();
  const handleSubmit = (credentials, { resetForm }) => {
    dispatch(authOperations.logIn(credentials));
    if (!token) {
      return alert('Please try again');
    } else {
      resetForm({ values: '' });
    }
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

            <Button type="submit">Submit</Button>
          </FormBox>
        )}
      </Formik>
    </Main>
  );
};

export default LoginView;

import shortid from 'shortid';
import { FormBox, Main, Label, Input, Button } from './LoginView.Styled';

const emailId = shortid();
const passwordId = shortid();

const LoginView = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = ({ target: { email, password } }) => {
    console.log(email);
    console.log(password);
  };

  return (
    <Main>
      <FormBox onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor={emailId}>
          mail
          <Input
            id={emailId}
            onChange={handleChange}
            type="email"
            name="email"
            value=""
          ></Input>
        </Label>
        <Label htmlFor={passwordId}>
          password
          <Input
            id={passwordId}
            onChange={handleChange}
            type="password"
            name="password"
            value=""
          ></Input>
        </Label>

        <Button type="submit">Submit</Button>
      </FormBox>
    </Main>
  );
};

export default LoginView;

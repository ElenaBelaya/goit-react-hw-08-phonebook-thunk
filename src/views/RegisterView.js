import shortid from 'shortid';
import { FormBox, Main, Label, Button, Input } from './RegisterView.Styled';

const nameId = shortid();
const emailId = shortid();
const passwordId = shortid();

const RegisterView = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = ({ target: { name, email, password } }) => {
    console.log(name);
    console.log(email);
    console.log(password);
  };
  return (
    <Main>
      <FormBox onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor={nameId}>
          name
          <Input
            onChange={handleChange}
            id={nameId}
            type="text"
            name="name"
            value=""
          ></Input>
        </Label>
        <Label htmlFor={emailId}>
          mail
          <Input
            onChange={handleChange}
            id={emailId}
            type="email"
            name="email"
            value=""
          ></Input>
        </Label>
        <Label htmlFor={passwordId}>
          password
          <Input
            onChange={handleChange}
            id={passwordId}
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

export default RegisterView;

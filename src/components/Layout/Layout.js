import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from 'components/section/Section.styled';
import {
  Link,
  Hr,
  Header,
  Button,
  Navigation,
  UserMenu,
} from './Layout.Styled';
import Loader from '../loader/Loader';
const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <div>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </Navigation>
        <UserMenu>
          <span>Wellcome, people</span>
          <Button type="button">Come in</Button>
        </UserMenu>
      </Header>
      <Hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;

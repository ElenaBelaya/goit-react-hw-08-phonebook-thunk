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
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
const Layout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);

  return (
    <Container>
      <Header>
        <Navigation>
          <div>
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
          </div>
          {isLoggedIn ? (
            <UserMenu>
              <span>Wellcome, {name}</span>
              <Button
                type="button"
                onClick={() => dispatch(authOperations.logOut())}
              >
                Come out
              </Button>
            </UserMenu>
          ) : (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          )}
        </Navigation>
      </Header>
      <Hr />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;

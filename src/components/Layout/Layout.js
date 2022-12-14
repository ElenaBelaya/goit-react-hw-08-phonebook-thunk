import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import user from '../static/images/website.jpg';
import { Container } from 'components/section/Section.styled';
import { Link, Hr, Header, Navigation, UserMenu, Text } from './Layout.Styled';
import Loader from '../loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Layout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const name = useSelector(authSelectors.getUserName);

  return (
    <Container>
      <Header>
        <Navigation>
          <div>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/contacts">Contacts</Link>}
          </div>
          {isLoggedIn ? (
            <UserMenu>
              <Avatar alt="User1" src={user} />
              <Text>Wellcome, {name}</Text>
              <Button
                size="small"
                variant="contained"
                color="primary"
                className={classes.button}
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

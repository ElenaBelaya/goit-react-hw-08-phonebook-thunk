import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { PrivateRoute } from 'components/userMenu/PrivateRoute';
import { PublicRoute } from 'components/userMenu/PublicRoute';
import ModalOpen from 'views/ModalOpen';
import Loader from 'components/loader/Loader';

const createViews = componentName => {
  return lazy(() => {
    return import(`./views/${componentName}`);
  });
};

const HomePage = createViews('HomeView');
const ContactsView = createViews('ContactsView');
const LoginView = createViews('LoginView');
const RegisterView = createViews('RegisterView');
const NotFoundView = createViews('NotFoundView');

export const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getisFetchingCurrentUser
  );

  const dispatch = useDispatch();
  //console.log(location.pathname);
  useEffect(() => {
    dispatch(authOperations.currentUser());
    //navigate(location.pathname);
  }, [dispatch]);
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="contacts" element={<ContactsView />} />
            <Route path="contacts/:modalId" element={<ModalOpen />} />
          </Route>
          <Route path="/" element={<PublicRoute />}>
            <Route path="login" element={<LoginView />} />
            <Route path="register" element={<RegisterView />} />
          </Route>
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

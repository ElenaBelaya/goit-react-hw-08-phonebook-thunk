import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import Layout from './components/Layout/Layout';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
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
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.currentUser());
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

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './components/Layout/Layout';

const createViews = componentName => {
  return lazy(() => {
    return import(`./views/${componentName}`);
  });
};

const HomePage = createViews('HomePage');
const ContactsView = createViews('ContactsView');
const LoginView = createViews('LoginView');
const RegisterView = createViews('RegisterView');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="login" element={<LoginView />} />
        <Route path="register" element={<RegisterView />} />
      </Route>
    </Routes>
  );
};

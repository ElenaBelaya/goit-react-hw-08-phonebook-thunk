import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="contacts" replace />;
}

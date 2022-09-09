import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import authSelectors from 'redux/auth/auth-selectors';

export function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  //const token = useSelector(authSelectors.getToken);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RedirectIfAuthenticate({ children }) {
  const authUser = useSelector((state) => state.auth.user);
  if (authUser) {
    return <Navigate to={'/admin/user'} />;
  }
  return children;
}

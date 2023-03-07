import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {
  const authUser = useSelector((state) => state.auth.user);
  if (!authUser) {
    return <Navigate to={'/login'} />;
  }
  return children;
}

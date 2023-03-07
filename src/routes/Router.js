import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import LoginAdminPage from '../pages/LoginAdminPage';
import AdminManageAccountPage from '../pages/AdminManageAccountPage';
import AdminManageMoviePage from '../pages/AdminManageMoviePage';
import AdminTransactionPage from '../pages/AdminTransactionPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginAdminPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/admin/user',
    element: (
      <ProtectedRoute>
        <AdminManageAccountPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/user/transaction',
    element: (
      <ProtectedRoute>
        <AdminTransactionPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin/movie',
    element: (
      <ProtectedRoute>
        <AdminManageMoviePage />
      </ProtectedRoute>
    ),
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

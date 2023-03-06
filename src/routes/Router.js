import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import LoginAdminPage from '../pages/LoginAdminPage';
import AdminManageAccountPage from '../pages/AdminManageAccountPage';
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
    path: '/',
    element: <AdminManageAccountPage />,
  },
  {
    path: '/adminSeeTransaction',
    element: <AdminTransactionPage />,
  },
  {
    path: '/adminManageMovie',
    element: <AdminManageMoviePage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

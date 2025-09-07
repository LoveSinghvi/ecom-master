import { Navigate } from 'react-router-dom';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  const isAdmin = localStorage.getItem('adminToken');

  if (!isAdmin) {
    return <Navigate to="/admin-login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
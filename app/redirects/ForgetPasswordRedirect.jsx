import { Navigate } from "react-router-dom";

export default function ForgetPasswordRedirect() {
  return <Navigate to="/admin-login/forget-password" replace />;
}

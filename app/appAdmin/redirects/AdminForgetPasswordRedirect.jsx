import { Navigate } from "react-router-dom";

export default function BranchForgetPasswordRedirect() {
  return <Navigate to="/admin-login/forget-password" replace />;
}

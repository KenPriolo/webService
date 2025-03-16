import { Navigate } from "react-router-dom";

export default function BranchForgetPasswordRedirect() {
  return <Navigate to="/branch-login/forget-password" replace />;
}

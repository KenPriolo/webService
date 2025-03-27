import { Navigate } from "react-router-dom";

export default function BranchForgetPasswordRedirect() {
  return <Navigate to="/login/forget-password" replace />;
}

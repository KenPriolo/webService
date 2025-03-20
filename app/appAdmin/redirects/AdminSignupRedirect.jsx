import { Navigate } from "react-router-dom";

export default function BranchSignupRedirect() {
  return <Navigate to="/admin-login/signup" replace />;
}

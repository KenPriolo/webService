import { Navigate } from "react-router-dom";

export default function BranchSignupRedirect() {
  return <Navigate to="/branch-login/signup" replace />;
}

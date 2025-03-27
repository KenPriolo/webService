import { Navigate } from "react-router-dom";

export default function BranchSignupRedirect() {
  return <Navigate to="/login/signup" replace />;
}

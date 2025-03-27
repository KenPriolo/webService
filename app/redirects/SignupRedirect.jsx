import { Navigate } from "react-router-dom";

export default function SignupRedirect() {
  return <Navigate to="/admin-login/signup" replace />;
}

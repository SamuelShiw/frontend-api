import { useNavigate } from "react-router-dom";

export function useAuth() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const isAuthenticated = Boolean(token);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return {
    token,
    isAuthenticated,
    logout,
  };
}
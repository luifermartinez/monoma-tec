import { useContext } from "react";
import AuthContext from "../context/auth.context";

const useAuth = () => {
  const { setUser, user } = useContext(AuthContext);

  return {
    setUser,
    user,
  };
};

export default useAuth;

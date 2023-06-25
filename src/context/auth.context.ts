import { createContext } from "react";
import { User } from "../interfaces";

interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;

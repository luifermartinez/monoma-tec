import { FC, useEffect, useContext } from "react";
import AuthContext from "./auth.context";

interface Props {
  children: React.ReactNode;
}

const InitAuthContext: FC<Props> = ({ children }) => {
  const { setUser } = useContext(AuthContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
  }, []);

  return <>{children}</>;
};

export default InitAuthContext;

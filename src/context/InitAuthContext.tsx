import { FC, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

const InitAuthContext: FC<Props> = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
  }, []);

  return <>{children}</>;
};

export default InitAuthContext;

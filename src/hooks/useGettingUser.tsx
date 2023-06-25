import { getUserByToken } from "../api";
import useAuth from "./useAuth";
import { useState, useEffect } from "react";

const useGettingUser = () => {
  const { setUser, user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
      return;
    }

    const gettingUser = async (token: string) => {
      try {
        const user = await getUserByToken(token);
        setUser(user);
      } catch (error) {
        localStorage.removeItem("token");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    gettingUser(token);
  }, [setUser, user]);

  return { loading, user };
};

export default useGettingUser;

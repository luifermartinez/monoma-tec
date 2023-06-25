import { motion } from "framer-motion";
import ProfileWrapper from "../components/profile/ProfileWrapper";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const Profile = () => {
  const { user, setUser } = useAuth();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
    Swal.fire({
      icon: "success",
      title: "Sesión cerrada",
      showConfirmButton: false,
      timer: 1500,
      background: "#1f2937",
      color: "#fff",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProfileWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white h-36 w-36 bg-white rounded-full bg-opacity-20 p-5 hover:bg-gray-400 hover:bg-opacity-20 transition duration-100 hover:fill-gray-200 mx-auto"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
        </svg>

        <div className="flex flex-col items-center justify-centers">
          <span className="text-white text-center text-2xl font-bold">
            {user?.user.name}
          </span>

          <span className="text-white text-center">{user?.email}</span>

          <span className="text-white text-center">
            {user?.user.gender === "M" ? "Masculino" : "Femenino"}
          </span>
        </div>

        <button
          className="border border-red-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg w-full"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </ProfileWrapper>
    </motion.div>
  );
};

export default Profile;

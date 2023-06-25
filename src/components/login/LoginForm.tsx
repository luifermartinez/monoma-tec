import { useForm } from "react-hook-form";
import { LoginInput } from "../../interfaces";
import { signIn } from "../../api";
import Swal from "sweetalert2";
import Spinner from "../Spinner";
import LoginTextfield from "./LoginTextfield";
import { useContext } from "react";
import AuthContext from "../../context/auth.context";

const LoginForm = () => {
  const { setUser } = useContext(AuthContext);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<LoginInput>({ mode: "onChange" });

  const onSubmit = async (data: LoginInput) => {
    try {
      const user = await signIn(data);
      setUser(user);
      localStorage.setItem("token", user.token);
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido!",
        text: "Has iniciado sesión correctamente",
        background: "#1f2937",
        color: "#fff",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
          background: "#1f2937",
          color: "#fff",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#23233B] shadow-2xl rounded-3xl p-6 mb-4 w-full mt-8 z-10 gap-y-6 flex flex-col"
    >
      <LoginTextfield
        control={control}
        label="CORREO ELECTRÓNICO"
        name="email"
        rules={{
          required: "Este campo es requerido",
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: "Ingresa un correo electrónico válido",
          },
        }}
        type="email"
        autocomplete="email"
      />

      <LoginTextfield
        control={control}
        label="CONTRASEÑA"
        name="password"
        rules={{
          required: "Este campo es requerido",
          minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
          },
        }}
        type="password"
        autocomplete="current-password"
      />

      <div className="flex items-center justify-center mt-3">
        <button
          className="bg-white  hover:scale-95 transition duration-100 justify-center text-black font-bold py-3 px-12 rounded-full focus:outline-none focus:shadow-outline flex items-center disabled:bg-gray-500 disabled:text-gray-400 gap-x-2"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting && <Spinner />}
          INICIAR
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="fill-white rounded-full h-5 w-5 bg-primary p-1"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

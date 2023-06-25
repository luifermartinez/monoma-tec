import LoginForm from "../components/login/LoginForm";
import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Monoma | Login</title>
        <meta name="description" content="Login" />
      </Helmet>
      <div className="flex justify-center items-center h-screen 0 p-2 font-mplus">
        <div className="w-full max-w-md flex flex-col items-center">
          <div className="relative">
            <img src="/img/logo-white.png" className="h-14 left-3/4 top-3/4" />
            <img
              className="h-9 absolute left-3/4 top-3/4"
              src="/img/pokemon-logo.png"
            />
          </div>
          <LoginForm />
          <a
            href="#"
            className="uppercase underline cursor-pointer font-semibold text-gray-400 underline-offset-2 decoration-2"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;

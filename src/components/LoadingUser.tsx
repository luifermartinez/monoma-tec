import Spinner from "./Spinner";

const LoadingUser = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Spinner size="large" text="sesión" />
    </div>
  );
};

export default LoadingUser;

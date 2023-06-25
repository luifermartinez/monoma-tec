import { FC } from "react";
import Footer from "../Footer";

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <main className="bg-meteors 0 min-h-screen text-gray-300 px-2 pb-2">
      {children}
      <Footer />
    </main>
  );
};

export default AppLayout;

import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardWrapper: FC<Props> = ({ children }) => {
  return (
    <section className="w-full max-w-4xl mx-auto p-4 bg-slate-700 bg-opacity-30 rounded-3xl mt-10 font-mplus gap-y-4 flex flex-col">
      {children}
    </section>
  );
};

export default DashboardWrapper;

import { FC } from "react";
interface Props {
  children: React.ReactNode;
}

const ProfileWrapper: FC<Props> = ({ children }) => {
  return (
    <section className="w-full max-w-xl mx-auto p-4 bg-slate-700 bg-opacity-30 rounded-3xl mt-10 font-mplus gap-y-4 flex flex-col items-center">
      {children}
    </section>
  );
};

export default ProfileWrapper;

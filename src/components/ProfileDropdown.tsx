import { FC, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  toggle: React.ReactNode;
  options: {
    text: React.ReactNode;
    onClick: () => void;
    icon?: React.ReactNode;
  }[];
}

const ProfileDropdown: FC<Props> = ({ toggle, options }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="inline-flex" ref={ref}>
      <button
        className="text-sm text-gray-600 hover:text-gray-700 mr-2"
        onClick={() => navigate("/profile")}
      >
        {toggle}
      </button>

      <div className="relative">
        <button
          type="button"
          className="inline-flex items-center justify-center h-full px-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-slate-800 rounded-md before:absolute before:w-0 before:h-0 before:bottom-full before:right-2 before:border-[.75rem] before:border-t-0 before:border-b-slate-800 before:border-transparent">
            <div className="p-2">
              {options.map((option, i) => (
                <button
                  className={`w-full block px-4 py-2 text-sm rounded-lg hover:bg-white hover:bg-opacity-10 font-semibold ${
                    option.icon ? "flex items-center gap-x-3" : ""
                  }`}
                  onClick={() => {
                    option.onClick();
                    setIsOpen(false);
                  }}
                  key={i}
                >
                  {option.icon}
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDropdown;

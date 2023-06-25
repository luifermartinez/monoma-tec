import { Control, RegisterOptions, useController } from "react-hook-form";
import { LoginInput } from "../../interfaces";
import { FC, useRef } from "react";

interface Props {
  control: Control<LoginInput>;
  rules?:
    | Omit<
        RegisterOptions<LoginInput, "email" | "password">,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  name: keyof LoginInput;
  label: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  autocomplete?: string;
}

const LoginTextfield: FC<Props> = ({
  label,
  control,
  rules,
  name,
  type,
  autocomplete,
}) => {
  const labelRef = useRef<HTMLLabelElement>(null);

  const {
    field,
    fieldState: { error },
  } = useController<LoginInput>({
    name,
    control,
    rules,
  });

  return (
    <div>
      <div className="relative">
        <input
          ref={field.ref}
          value={field.value}
          onChange={field.onChange}
          name={field.name}
          id={field.name}
          className="appearance-none bg-[#434459] border-none w-full text-white leading-tight focus:outline-none rounded-lg px-2 pt-5 pb-2 font-semibold"
          type={type ?? "text"}
          onFocus={() => {
            if (labelRef.current) {
              labelRef.current.classList.add(`-translate-y-[1.5rem]`);
              labelRef.current.classList.add(`text-xs`);
            }
          }}
          onBlur={(e) => {
            if (!labelRef.current) return;
            if (e.target.value !== "") return;
            labelRef.current.classList.remove(`-translate-y-[1.5rem]`);
            labelRef.current.classList.remove(`text-xs`);
          }}
          autoComplete={autocomplete}
        />
        <label
          ref={labelRef}
          htmlFor={field.name}
          className="absolute left-0 transition-all duration-100 ease-out top-1/2 -translate-y-1/2 px-2 font-semibold text-gray-400"
        >
          {label}
        </label>
      </div>
      {error && (
        <span className="text-red-500 text-xs italic">{error.message}</span>
      )}
    </div>
  );
};

export default LoginTextfield;

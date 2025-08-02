interface FormInputProps {
  className?: string;
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const FormInput = ({
  className,
  id,
  name,
  label,
  placeholder,
  type,
  required,
  onChange,
  value,
}: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-semibold">
        {label}
        {required && <span className="superscript text-red-500">*</span>}
      </label>
      <input
        className="py-1 px-4 rounded-md bg-gray-100 md:w-full h-[40px] md:h-[45px] xl:h-[50px]"
        type={type}
        autoComplete="off"
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;

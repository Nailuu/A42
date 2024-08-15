interface FormInputProps {
  className?: string;
  id: string;
  label: string;
  placeholder: string;
  type: string;
  required: boolean;
}

const FormInput = ({
  className,
  id,
  label,
  placeholder,
  type,
  required,
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
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default FormInput;

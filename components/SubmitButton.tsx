"use client";

interface SubmitButtonProps {
  isSubmitting?: boolean;
}

const SubmitButton = ({isSubmitting = false}: SubmitButtonProps) => {

  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="flex justify-center items-center cursor-pointer bg-[#070C1B] hover:bg-[#061743] transition-all duration-300 ease-in-out hover:skew-y-1 hover:scale-[1.1] disabled:bg-[#afafaf] text-white text-[12px] lg:text-base xl:text-lg 2xl:text-xl py-2.5 lg:py-3 2xl:py-4 px-5 lg:px-8 rounded-md 2xl:rounded-lg w-48 lg:w-56 xl:w-64 2xl:w-72"
    >
      {isSubmitting && (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      { isSubmitting ? "Sending..." : "Send Message"}
    </button>
  );
};

export default SubmitButton;

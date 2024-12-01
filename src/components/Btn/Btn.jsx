const Btn = ({ word, className, type, isLoading }) => {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={`bg-[#36eb32b8] text-white font-bold ${className} ${
        isLoading && "opacity-50 cursor-not-allowed"
      }`}
    >
      {word}
    </button>
  );
};

export default Btn;

const Filterbutton = ({ text, active }) => {
  return (
    <button
      className={`px-8 h-10 py-1 font-bold cursor-pointer ${
        active ? "bg-accentLight" : "border-accentMedium bg-transparent border"
      }`}
    >
      {text}
    </button>
  );
};

export default Filterbutton;

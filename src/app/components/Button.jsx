const colors = {
  primary: "bg-accentDark hover:bg-accentMedium text-background",
  secondary:
    "bg-accentLight hover:bg-accentDark hover:text-background text-text",
};

const Button = ({ text, className, color = "primary" }) => {
  return (
    <button
      className={`font-bold cursor-pointer w-full h-8 ${className} ${colors[color]}`}
    >
      {text}
    </button>
  );
};

export default Button;

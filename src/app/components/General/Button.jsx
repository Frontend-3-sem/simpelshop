const colors = {
  primary: "bg-accentDark hover:bg-accentMedium text-background",
  secondary:
    "bg-accentLight hover:bg-accentDark hover:text-background text-text",
};

const Button = ({ text, className = "cursor-pointer", color = "primary" }) => {
  return (
    <button className={`font-bold w-full h-8  ${colors[color]} ${className}`}>
      {text}
    </button>
  );
};

export default Button;

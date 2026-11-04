function Tags({ stock }) {
  const sale = stock > 20;

  return (
    <p
      className={`px-2 w-fit font-bold ${sale ? "bg-olive-500 text-background" : "bg-accentLight text-text"}`}
    >
      {sale ? "Sale" : "Low in stock"}
    </p>
  );
}

export default Tags;

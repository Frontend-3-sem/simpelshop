import CardComponent from "./Card";
const Popular = () => {
  return (
    <>
      <section>
        <h2>Popular products</h2>
        <div className="grid grid-cols-4">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </section>
    </>
  );
};

export default Popular;

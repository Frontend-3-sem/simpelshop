import CardComponent from "./components/Card";

export default function Listview() {
  return (
    <>
      <section className="mx-auto md: min-w-auto lg:max-w-5xl px-6">
        <div className="grid sm: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
      </section>
    </>
  );
}

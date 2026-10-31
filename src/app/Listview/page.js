import CardComponent from "../components/Card";
import Filterbutton from "../components/FilterButton";
import Search from "../components/Search";
import Button from "../components/Button";

export default function Listview() {
  return (
    <>
      <section className="mx-auto px-8 max-w-6xl selection:bg-accentDark selection:text-background">
        <h1 className="mt-14 mb-2">BEDROOM</h1>
        <p>10 products</p>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mb-6 mt-4">
          <div className="flex flex-wrap w-full max-w-2xl gap-2">
            <Filterbutton text="All" active={true} />
            <Filterbutton text="Beds" active={false} />
            <Filterbutton text="Sofas" active={false} />
            <Filterbutton text="Kitchen" active={false} />
            <Filterbutton text="Bathroom" active={false} />
            <Filterbutton text="Bedside tables" active={false} />
            <Filterbutton text="Office chairs" active={false} />
          </div>
          <div>
            <Search />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </div>
        <div className="flex items-center justify-center w-full sm:w-64 mx-auto mt-15 mb-18">
          <Button text="Show more" color="secondary" />
        </div>
      </section>
    </>
  );
}

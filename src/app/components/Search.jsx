import { TfiSearch } from "react-icons/tfi";
import Form from "next/form";

const Search = () => {
  return (
    <>
      <Form action="/search" className="relative w-full sm:w-52 lg:w-64">
        <input
          type="search"
          name="Search product"
          placeholder="Search Products"
          className=" focus:outline-none block h-10 w-full pl-4 px-8 border border-accentMedium
          [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:hidden"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
        >
          <TfiSearch className="h-5 w-auto" />
        </button>
      </Form>
    </>
  );
};

export default Search;

import { useContext } from "react";
import { HiSearch } from "react-icons/hi";
import { SearchContext } from "../../context/searchContext";

export const SearchBar = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleSearchMovie = (e) => {
    e.preventDefault();

    setSearchValue(e.target.elements.search.value);
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center ">
      <form
        onSubmit={handleSearchMovie}
        className="flex justify-center items-center gap-5 relative"
      >
        <HiSearch className="absolute top-4 left-2 text-blue-200" />
        <input
          className="p-2 border-b-2 border-blue-200 rounded-lg outline-none w-80 bg-transparent text-blue-200 hover:border-black pl-8 relative"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />

        <button
          className="border-2 rounded-xl py-2 px-5 text-blue-200 border-blue-200 font-bold hover:text-blue-950 hover:bg-blue-200"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

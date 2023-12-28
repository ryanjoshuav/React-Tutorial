import { useGlobalContext } from "../context/context.jsx";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input type="text" name="search" className="form-input search-input" />
        <button className="btn">search</button>
      </form>
    </section>
  );
};
export default SearchForm;

import { SearchBarProps } from "../../helpers/app.types";
import "./SearchBar.scss";
export default function SearchBar(search: SearchBarProps) {
  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    search.onSearchChange({
      searchText: event.target.value,
      showProductsInStockOnly: search.showProductsInStockOnly,
    });
  }

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    search.onSearchChange({
      searchText: search.searchText,
      showProductsInStockOnly: event.target.checked,
    });
  }

  return (
    <form className="search-bar">
      <input
        className="search-bar-text"
        type="text"
        placeholder="Search..."
        value={search.searchText}
        onChange={handleTextChange}
      />
      <label className="search-bar-checkbox">
        <input
          type="checkbox"
          checked={search.showProductsInStockOnly}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </form>
  );
}

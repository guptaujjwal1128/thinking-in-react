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
    <div className="search-bar">
      <input
        className="search-bar-text"
        type="text"
        placeholder="Search..."
        value={search.searchText}
        onChange={handleTextChange}
      />
      <div className="search-bar-checkbox">
        <input
          className="search-bar-checkbox-input"
          type="checkbox"
          id="inStockCheckbox"
          checked={search.showProductsInStockOnly}
          onChange={handleCheckboxChange}
        />
        <label className="search-bar-checkbox-label" htmlFor="inStockCheckbox">
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

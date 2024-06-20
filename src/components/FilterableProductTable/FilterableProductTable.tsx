import { useState } from "react";

import { IProductTable, ISearchBar } from "../../helpers/app.types";
import "./FilterableProductTable.scss";

import ProductTable from "../ProductTable/ProductTable";
import SearchBar from "../SearchBar/SearchBar";

export default function FilterableProductTable({ rows }: IProductTable) {
  const [search, setSearch] = useState<ISearchBar>({
    searchText: "",
    showProductsInStockOnly: false,
  });

  function handleSearchChange({
    searchText,
    showProductsInStockOnly,
  }: ISearchBar) {
    setSearch({
      searchText: searchText,
      showProductsInStockOnly: showProductsInStockOnly,
    });
  }

  const filteredRows = rows.filter((row) => {
    const rowName = row.name.toLowerCase();
    const inStock = row.inStock;
    const condForSearchText = rowName.includes(search.searchText.toLowerCase());
    const condForInStock = search.showProductsInStockOnly ? inStock : true;
    return condForSearchText && condForInStock;
  });

  return (
    <>
      <SearchBar
        searchText={search.searchText}
        showProductsInStockOnly={search.showProductsInStockOnly}
        onSearchChange={handleSearchChange}
      ></SearchBar>
      <ProductTable rows={filteredRows}></ProductTable>
    </>
  );
}

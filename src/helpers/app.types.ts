//enums

export const enum EProductCategoryRow {
  Fruits = "Fruits",
  Vegetables = "Vegetables",
}

// interfaces
export interface IProductRow {
  name: string;
  price: number;
  inStock: boolean;
  category: EProductCategoryRow;
}

export interface IProductTable {
  rows: IProductRow[];
}

export interface ISearchBar {
  searchText: string;
  showProductsInStockOnly: boolean;
}

export interface SearchBarProps extends ISearchBar {
  onSearchChange: (search: ISearchBar) => void;
}

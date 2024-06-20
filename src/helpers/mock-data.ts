import { IProductRow, EProductCategoryRow } from "./app.types";

export const categories: EProductCategoryRow[] = [
  EProductCategoryRow.Fruits,
  EProductCategoryRow.Vegetables,
];

export const mockData: IProductRow[] = [
  {
    name: "Apple",
    price: 1,
    inStock: true,
    category: EProductCategoryRow.Fruits,
  },
  {
    name: "Dragonfruit",
    price: 1,
    inStock: true,
    category: EProductCategoryRow.Fruits,
  },
  {
    name: "Passionfruit",
    price: 2,
    inStock: false,
    category: EProductCategoryRow.Fruits,
  },
  {
    name: "Spinach",
    price: 2,
    inStock: true,
    category: EProductCategoryRow.Vegetables,
  },
  {
    name: "Pumpkin",
    price: 4,
    inStock: false,
    category: EProductCategoryRow.Vegetables,
  },
  {
    name: "Peas",
    price: 1,
    inStock: true,
    category: EProductCategoryRow.Vegetables,
  },
];

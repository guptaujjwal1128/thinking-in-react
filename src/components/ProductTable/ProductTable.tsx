import { Fragment } from "react";

import { EProductCategoryRow, IProductTable } from "../../helpers/app.types";
import { categories } from "../../helpers/mock-data";
import "./ProductTable.scss";

import ProductCategoryRow from "../ProductCategoryRow/ProductCategoryRow";
import ProductRow from "../ProductRow/ProductRow";

export default function ProductTable({ rows }: IProductTable) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category: EProductCategoryRow) => (
          <Fragment key={category}>
            <ProductCategoryRow
              key={category}
              categoryName={category}
            ></ProductCategoryRow>
            {rows
              .filter((row) => row.category === category)
              .map((row) => (
                <ProductRow key={row.name} row={row}></ProductRow>
              ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}

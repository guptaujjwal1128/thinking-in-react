import { IProductRow } from "../../helpers/app.types";
import "./ProductRow.scss";

export default function ProductRow({ row }: { row: IProductRow }) {
  return (
    <tr className="product-row">
      <td
        className={
          row.inStock ? "product-row-in-stock" : "product-row-not-in-stock"
        }
        key={row.name}
      >
        {row.name}
      </td>
      <td key={row.price}>{row.price}</td>
    </tr>
  );
}

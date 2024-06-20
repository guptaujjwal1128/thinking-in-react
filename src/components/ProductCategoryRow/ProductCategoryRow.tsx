import { EProductCategoryRow } from "../../helpers/app.types";
import "./ProductCategoryRow.scss";

export default function ProductCategoryRow({
  categoryName,
}: {
  categoryName: EProductCategoryRow;
}) {
  return (
    <tr>
      <th colSpan={2} className="product-category-row-header">
        {categoryName}
      </th>
    </tr>
  );
}

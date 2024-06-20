import "./App.scss";
import FilterableProductTable from "./components/FilterableProductTable/FilterableProductTable";
import { mockData } from "./helpers/mock-data";

export default function App() {
  const productRows = mockData;
  return (
    <>
      <main>
        <FilterableProductTable rows={productRows}></FilterableProductTable>
      </main>
    </>
  );
}

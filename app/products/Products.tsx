import { Card } from "./Card";
import { products } from "./productData";

export default function Products({ search }: { search: string }) {
  const filteredData = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {!products ? (
        <div className="h-[50vh] bg-gradient-to-b from-purple-900 to-slate-700 rounded-3xl justify-center w-64 grid place-items-center">
          Loading
        </div>
      ) : (
        <>
          {" "}
          {filteredData.map((product) => {
            return <Card key={product.id} data={product} />;
          })}
        </>
      )}
    </>
  );
}

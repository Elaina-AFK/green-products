import { Card } from "./Card";
import { products } from "./productData";

export default function Products() {
  return (
    <>
      {products.map((product) => {
        return <Card key={product.id} data={product} />;
      })}
    </>
  );
}

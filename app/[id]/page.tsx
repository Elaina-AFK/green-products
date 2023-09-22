import data from "../data.json";
import Image from "next/image";

export async function generateStaticParams() {
  const pages = data;

  return pages.map((page) => ({
    id: String(page.id),
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const [productData] = data.filter(
    (product) => product.id === Number(params.id)
  );

  return (
    <main>
      <Image src={productData.image} height={400} width={400} alt="green" />
      <ol key={productData.id}>
        <li>{productData.name}</li>
        <li>{productData.subtitle}</li>
        <li>{productData.description.paragraph1}</li>
        <li>{productData.description.paragraph2}</li>
        <li>{productData.description.paragraph3}</li>
      </ol>
    </main>
  );
}

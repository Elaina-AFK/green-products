import { Card } from "./Card";
import data from "./data.json";

interface Data {
  id: number;
  name: string;
  subtitle: string;
  description: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  image: string;
}

export default function Home() {
  return (
    <main className="bg-slate-400 grid min-h-screen">
      <section className="my-16 flex gap-x-2 flex-wrap justify-around gap-y-5">
        {data.map((product) => {
          return <Card key={product.id} data={product} />;
        })}
      </section>
    </main>
  );
}

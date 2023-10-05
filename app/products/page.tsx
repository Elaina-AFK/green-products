import Products from "./Products";

interface Products {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="w-full h-screen">
        <Products />
      </div>
    </main>
  );
}

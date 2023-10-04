"use client";
import greenPicture from "../../public/green technology product.jpeg";
import Image from "next/image";
import Products from "./Products";
import { useState } from "react";

interface Products {
  id: string;
  name: string;
  subtitle: string;
  image: string;
}

export default function HomePage() {
  const [search, setSearch] = useState("");

  const setText = (text: string) => {
    setSearch(text);
  };

  return (
    <main className="min-h-screen">
      {/* <Banner /> */}
      <div className="w-full h-screen">
        <Products search={search} />
      </div>
    </main>
  );
}

function Banner() {
  return (
    <section className="bg-gradient-to-br from-emerald-950 to-emerald-600 h-screen flex justify-around items-center">
      <div className="flex flex-col h-64 justify-">
        <hgroup>
          <h1 className="font-serif text-5xl">Green Technology Products</h1>
          <h6 className="text-3xl font-sans mt-4">for GE144</h6>
        </hgroup>
        <p className="font-sans text-xl text-end">ตัวอย่างผลิตภัณฑ์สีเขียว</p>
      </div>
      <figure className="">
        <Image
          alt="Green Technology products"
          width={500}
          height={500}
          src={greenPicture}
        />
      </figure>
    </section>
  );
}

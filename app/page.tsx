"use client";

import { useContext } from "react";
import { Card } from "./Card";
import { ProductContext } from "./ProductProvider";
import greenPicture from "../public/green technology product.jpeg";
import Image from "next/image";

export default function Home() {
  const { data, search } = useContext(ProductContext);

  return (
    <main className="bg-emerald-900 grid min-h-screen">
      {/* <Banner /> */}
      <section className="my-16 flex gap-x-4 flex-wrap justify-around gap-y-10">
        {!data ? (
          <div className="h-[50vh] bg-gradient-to-b from-purple-900 to-slate-700 rounded-3xl justify-center w-64 grid place-items-center">
            Loading
          </div>
        ) : (
          <>
            {" "}
            {data
              .filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((product) => {
                return <Card key={product.id} data={product} />;
              })}
          </>
        )}
      </section>
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

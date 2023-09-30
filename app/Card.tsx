"use client";
import Image from "next/image";

interface Products {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
}

export function Card({ data }: { data: Products }) {
  return (
    <a href={"/"} className="h-[50vh] max-h-[50vh]">
      <div className="bg-gradient-to-b from-purple-900 to-slate-700 rounded-3xl justify-center flex flex-col w-64">
        <Image
          alt="product"
          width={100}
          height={100}
          className="bg-slate-600 w-full h-full rounded-t-3xl object-cover aspect-auto"
          src={data.image}
        />
        <article className=" w-full h-[50px]">
          <h3 className="text-center">{data.name}</h3>
          <h3 className="text-center">{data.subtitle}</h3>
        </article>
      </div>
    </a>
  );
}

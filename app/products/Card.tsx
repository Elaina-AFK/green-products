"use client";
import Image from "next/image";
import Link from "next/link";

interface Products {
  id: string;
  name: string;
  path: string;
  image: string;
}

export function Card({ data }: { data: Products }) {
  return (
    <section className="w-full h-full relative brightness-50 hover:brightness-75 transition-all duration-150 grid grid-cols-12 place-items-end">
      <Image
        src={data.image}
        width={900}
        height={900}
        alt={data.name}
        className="absolute hover:scale-125 transition-all left-28 top-20 -z-10 duration-700 rounded-2xl"
      />
      <Link
        href={`/products/${data.path}`}
        className="bg-gradient-to-r from-slate-900 via-black col-start-7 col-span-5 my-8 flex justify-between items-center group rounded-3xl"
      >
        <h1 className="text-5xl font-serif font-extrabold p-2">{data.name}</h1>
        <svg
          className="fill-emerald-500 aspect-square w-32 group-hover:animate-pulse group-hover:fill-teal-500"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z"></path>
        </svg>
      </Link>
    </section>
  );
}

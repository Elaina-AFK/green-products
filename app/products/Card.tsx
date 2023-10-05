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
    <section className="relative w-full h-full transition-all duration-150 grid grid-cols-12 place-items-end m-0 overflow-hidden">
      <Image
        unoptimized
        src={data.image}
        fill={true}
        alt={data.name}
        className="hover:scale-125 transition-all z-10 duration-700 aspect-video object-cover overflow-hidden"
      />
      <Link
        href={`/products/${data.path}`}
        className="z-20 bg-gradient-to-r from-slate-900 via-black col-start-7 col-span-5 my-8 flex justify-between items-center group rounded-3xl max-md:col-start-4 max-md:col-span-10"
      >
        <h1 className="text-3xl font-serif font-extrabold p-2 whitespace-nowrap">
          {data.name}
        </h1>
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

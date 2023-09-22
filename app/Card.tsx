"use client";
import Image from "next/image";
import Green from "../public/green.png";

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

export function Card({ data }: { data: Data }) {
  return (
    <a href={"/" + data.id}>
      <div className="h-[50vh] bg-gradient-to-b from-purple-900 to-slate-700 rounded-3xl justify-center flex flex-col w-64">
        <Image
          alt="product"
          width={100}
          height={100}
          className="bg-slate-600 w-full h-full rounded-t-3xl object-cover aspect-auto"
          src={Green}
        />
        <article className=" w-full h-[50px]">
          <h3 className="text-center">Green Products</h3>
        </article>
      </div>
    </a>
  );
}

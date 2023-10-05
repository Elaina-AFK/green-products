import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <main className="grid h-auto grid-cols-12 gap-y-32 px-8 py-16 max-md:px-1 relative max-md:flex max-md:flex-col">
      <Back />
      <section className="col-span-3 flex flex-col justify-center max-md:mt-7 max-md:order-2 max-md:items-center">
        <h2>Who are we?</h2>
        <p className="max-w-prose">
          พวกเรามาจากมหาวิทยาลัยพายัพ จังหวัดเชียงใหม่
          <br />
          จัดทำโปรเจคเว็บไซต์นี้ขึ้นเพื่อส่งอาจารย์ ในรายวิชา Green Tchonology
          (GE 144)
        </p>
      </section>
      <figure className="col-span-9 col-start-5 max-md:order-1">
        <div className="aspect-video w-full relative">
          <Image
            unoptimized
            src="/payap.jpeg"
            alt="payap university"
            fill={true}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </figure>
      <figure className="col-span-4 max-md:order-3">
        <div className="relative aspect-square w-full max-w-xs mx-auto">
          <Image
            unoptimized
            src={"/logo.png"}
            alt="payap logo"
            fill={true}
            className="rounded-full shadow-2xl"
          />
        </div>
      </figure>
      <section className="col-span-7 col-start-6 flex flex-col justify-center max-md:order-4 max-md:items-center">
        <h2>จัดทำโดย</h2>
        <ol className="max-w-prose pl-4">
          <li>Mr Le Tan Loi 6601150070</li>
          <li>กลินท์​ ศิลา​กุล​ 6601150100​</li>
          <li>นภัทร์ชนน กาวี 6601150117</li>
          <li>พงศ์พล พลอาจ 6601260038</li>
          <li>บุณญษกร เรือนทอง 6601260069</li>
          <li>พงษ์ศักดิ์ อุดตึง 6601260045</li>
        </ol>
      </section>
    </main>
  );
}

function Back() {
  return (
    <Link
      href={"/"}
      className="z-10 absolute text-xl flex stroke-white items-center cursor-pointer max-md:-top-36 max-md:left-0"
    >
      <svg
        width="3em"
        height="3em"
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="m46.196 16.205l-19.392 19.46l19.392 19.46"
        ></path>
      </svg>
      <label className="-ml-3 cursor-pointer">Back</label>
    </Link>
  );
}

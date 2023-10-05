import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="my-20 mx-20 py-8 px-4 relative bg-cyan-950 rounded-3xl shadow-2xl max-md:my-4 max-md:mx-1">
      <Back />
      {children}
    </main>
  );
}

function Back() {
  return (
    <Link
      href={"/products"}
      className="-left-14 -top-16 absolute text-xl flex stroke-white items-center cursor-pointer max-md:left-0 max-md:-top-44"
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
      <label className="-ml-3 z-10">Back</label>
    </Link>
  );
}

import Link from "next/link";

export default function Header() {
  return (
    <header className="h-20 bg-[#295417] w-screen pl-10 text-[#c1ff72] grid grid-cols-12 place-items-center">
      <Link href={"/"} className="flex items-center">
        <svg
          height={56}
          width={56}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#c1ff72"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
          />
          <path
            fill="none"
            stroke="#c1ff72"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
          />
        </svg>
        <hgroup className="font-sans min-w-[40px]">
          <h1>BAAN</h1>
          <h1 className="whitespace-nowrap">รักษ์โลก</h1>
        </hgroup>
      </Link>
      <div className="col-span-11 flex justify-center items-center text-black w-full">
        <svg
          width="20"
          height="20"
          viewBox="0 0 1024 1024"
          className="relative left-7"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="M1014.64 969.04L703.71 656.207c57.952-69.408 92.88-158.704 92.88-256.208c0-220.912-179.088-400-400-400s-400 179.088-400 400s179.088 400 400 400c100.368 0 192.048-37.056 262.288-98.144l310.496 312.448c12.496 12.497 32.769 12.497 45.265 0c12.48-12.496 12.48-32.752 0-45.263zM396.59 736.527c-185.856 0-336.528-150.672-336.528-336.528S210.734 63.471 396.59 63.471c185.856 0 336.528 150.672 336.528 336.528S582.446 736.527 396.59 736.527z"
          />
        </svg>
        <input className="bg-white rounded-full h-8 w-full max-w-md px-8" />
      </div>
    </header>
  );
}

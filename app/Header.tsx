import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#295417] w-screen text-[#c1ff72] flex justify-around max-md:flex-col max-md:justify-between items-center text-center gap-y-4 p-0 m-0">
      <Link href={"/"} className="flex items-center my-2">
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
      <nav className="w-1/3 max-md:w-full h-full">
        <ul className="flex w-full justify-around max-md:flex-col max-md:items-stretch">
          <li className="w-full">
            <Link
              href={"/aboutus"}
              className="p-1.5 block w-max mx-auto max-md:w-full"
            >
              เกี่ยวกับเรา
            </Link>
          </li>
          <li className="w-full">
            <Link
              href={"/products"}
              className="p-1.5 block w-max mx-auto max-md:w-full"
            >
              ผลิตภัณฑ์สีเขียว
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

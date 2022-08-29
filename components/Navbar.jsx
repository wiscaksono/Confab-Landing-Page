import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mt-8 mb-5 flex items-center justify-between wrapper">
      <Link href="/">
        <a className="inline px-8 py-2 koulen smoke text-2xl">CONFAB</a>
      </Link>

      <div className="flex items-center justify-center gap-[74px]">
        <div className="flex gap-6 items-center justify-center">
          <a className="py-2 px-4 body-regular font-medium">Browse</a>
          <a className="py-2 px-4 body-regular font-medium">
            Enter a code/link
          </a>
          <a className="py-2 px-4 body-regular font-medium">Confab</a>
        </div>

        <button className="py-2 px-4 body-regular font-semibold pl-4 pr-6 bg-black text-white rounded-full flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <span>New Event</span>
        </button>
      </div>
    </nav>
  );
}

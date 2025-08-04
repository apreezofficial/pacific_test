import Link from "next/link";

export default function NavBar() {
  return (
    <header className="sticky text-white top-0 z-[2000] bg-[#5200f5] transition-colors duration-300">
      <div className="container mx-auto px-6 lg:px-12 py-6 grid grid-cols-[auto_auto_auto] items-center gap-6 xl:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="block">
            <h2 className="text-xl lg:text-2xl font-bold truncate">
              Pacific Safety Solution
            </h2>
          </Link>
        </div>
        <div className="hidden lg:flex items-center justify-end gap-10 col-span-2">
          <ul className="flex items-center gap-4 flex-wrap justify-end"></ul>
        </div>
        <div className="ml-auto lg:hidden"></div>
      </div>
    </header>
  );
}

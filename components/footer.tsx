import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-1">
      <div
        id="website-footer"
        className="relative flex-1 z-10 break-words text-gray-900 pt-0 pb-0"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 z-10 bg-[#e0dde4]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto pt-8 lg:pt-12 pb-8 lg:pb-12">
          <div className="flex flex-col ">
            <div className="flex items-center justify-center">
              <Link href="/" className="grid max-w-full">
                <h2 className="text-xl text-center font-[lato]  font-semibold leading-none text-gray-800">
                  © Pacific safety solution 2025
                </h2>
              </Link>
              <div className="flex flex-col lg:flex-row lg:items-center gap-12">
                {/* Add other footer content here later */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

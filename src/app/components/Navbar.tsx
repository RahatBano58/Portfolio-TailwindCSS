import Link from "next/link"
import Image from "next/image"

export default function Navbar(){
    return ( 
    <div className="bg-black z-50 sticky top-0">
        <header className="text-white body-font">
          <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <Image
                src="/images/rblogo.jpg"
                alt="RB"
                width={100}
                height={100}
                className="w-[50px]"
              />
              <span className="ml-3 text-xl font-extrabold">My Portfolio</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link href={"#home"} className="mr-5 hover:text-blue-500 font-bold">
                Home
              </Link>
              <Link href={"#about"} className="mr-5 hover:text-blue-500 font-bold">
                About
              </Link>
              <Link href={"#skills"} className="mr-5 hover:text-blue-500 font-bold">
                Skills
              </Link>
              <Link href={"#project"} className="mr-5 hover:text-blue-500 font-bold">
                Projects
              </Link>
              <Link href={"#Contact"} className="mr-5 hover:text-blue-500 font-bold">
                Contact
              </Link>
            </nav>
            <button className="inline-flex items-center bg-gray-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0 font-bold ">
              <Link href={""}>
                Download CV
              </Link>
            </button>
          </div>
        </header>
      </div>
    )
}
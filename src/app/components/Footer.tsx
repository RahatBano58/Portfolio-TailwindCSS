import Link from "next/link";
export default function Footer (){
    return (
        <div className=" bg-black">
            <footer className="text-white body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
                    <p className="text-sm text-white sm:py-2 sm:mt-0 mt-4 justify-center">
                      © 2024 Rahat Bano | All Right Reserved
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                          target="_blank"
                          href={"https://www.linkedin.com/in/rahat-bano-5b78b41b3/"}
                          className="text-white font-extrabold hover:text-blue-500 hover:underline"
                         >
                          LinkedIn  
                        </Link>
                    </span>
                </div>
            </footer>
        </div>
    );
};
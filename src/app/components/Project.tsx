import Link from "next/link"
import Image from "next/image"
import React from "react"
export default function Project (){
    return (
        <div id="project" className="bg-slate-600">
            <section className="text-white body-font font-bold">
               <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white ">
                           My Projects
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            I&apos;ve successfully completed 6 projects that reflect the skills and
                            knowledge I&apos;ve gained over time. These projects range from web
                            development to interactive programming, showcasing my growth as a
                            developer. Here’s a brief overview: Countdown Timer: Built with
                            HTML, CSS, and JavaScript. Adventure-Game: A fun and engaging game
                            using core web technologies. CLI Number Guessing Game: A
                            command-line project focusing on logic and algorithms.
                            Interactive Web App: Utilized JavaScript to
                            create a dynamic user experience. Full Website Project: Built from
                            scratch, incorporating various front-end technologies.
                        </p>
                    </div>
          <div className="flex flex-wrap -m-4">
            {/* Countdown Timer Project */}
            <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/countdowntimer.png"
                  width={500}
                  height={800}
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    Countdown Timer
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    Countdown Timer: Built a countdown timer project using HTML,
                    CSS, and JavaScript.
                  </p>
                  <Link
                    href={
                      "https://github.com/RahatBano58/Countdown-Timer.git"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* CLI Number Guessing Game Project */}
            <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/numbergame.jpg"
                  width={500}
                  height={800}
                  
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    CLI Number Guessing Game
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    CLI Number Guessing Game: A command-line interface game
                    where the user guesses a number.
                  </p>
                  <Link
                    href={
                      "https://github.com/RahatBano58/CLI-Number-Guessing-Game.git"
                    }
                  >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* Student Management Project */}
            <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/studentmanagement.png"
                  width={500}
                  height={800}
                  
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                   Student Management
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                  These systems work to coordinate scheduling and communications
                   between faculty regarding students
                  </p>
                  <Link 
                  href={
                    "https://github.com/RahatBano58/Cli-Student-Management-System.git"
                    }>
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>

            {/* ATM Project */}
            <div className="lg:w-1/4 sm:w-1/2 p-4 cursor-pointer">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="/images/atm.jpg"
                  width={500}
                  height={800}
                  
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-black mb-3">
                    ATM
                  </h1>
                  <p className="leading-relaxed line-clamp-2 text-black">
                    ATM: I am working on an ATM project.
                  </p>
                  <Link 
                  href={
                    "https://github.com/RahatBano58/ATM-.git"
                    }
                    >
                    <p className="leading-relaxed text-blue-500 hover:underline">
                      View Project ...
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}
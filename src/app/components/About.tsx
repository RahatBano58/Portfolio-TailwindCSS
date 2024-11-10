import Link from "next/link"
import Image from "next/image"

export default function About (){
  return (
    <div id="about" className="bg-slate-600">
      <section className="text-white body-font font-bold">
        <div className="container e-mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="rahat"
              src="/images/profile.jpg"
              width={200}
              height={200}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About me
              <br className="hidden lg:inline-block" />
            </h1>
              <p className="mb-8 leading-relaxed">
                &quot;My name is Rahat Bano, and I am a frontend developer. You can reach
                me at my phone number, 0334-3226435, or via email at
                rahatbano142@gmail.com.&quot;
              </p>
              <p className="mb-8 leading-relaxed">
                I am a passionate and skilled front-end developer with expertise
                in crafting responsive, user-friendly web applications. My
                experience spans across HTML, CSS, JavaScript, and Next.js,
                with a deep understanding of UI/UX principles and design
                aesthetics. I am proficient in building reusable components,
                integrating Tailwind CSS for responsive design, and also a Graphic Designer
                work in Adobe Photoshop & Adobe Illustrator for creating captivating visuals
                for websites and applications that are visually appealing and optimizing
                performance for seamless user experiences.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
                  <Link href={""}>
                     View CV
                  </Link>
                </button>
                <button className="ml-4 inline-flex text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
                  Whats app
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

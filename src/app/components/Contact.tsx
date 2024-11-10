
export default function Contact () {
    return (
        <div id="Contact" className="bg-slate-700 justify-center items-center">
            <section className="text-slate-400 body-font relative">
                <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 md:mr-0 md:px-8 ">
                    <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                     Contact Me
                    </h2>
                    <p className="leading-relaxed mb-5 text-white">
                      If you have any questions & work from me,  feel free to contact me
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-white">
                         Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="email"
                            className="leading-7 text-sm text-white"
                         >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                   </div>
                   <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-white"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  defaultValue={""}
                />
              </div>
              <button className="text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">
                Send Message
              </button>
              <p className="text-xs text-gray-500 mt-3"></p>
            </div>
        </section>
      </div>
    )
}
import React from "react";

function Experience() {
  return (
    <div>
      <h1 className="py-8 font-semibold text-2xl md:text-3xl text-center">
        My experiences over the years...
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <section className="flex flex-col items-center">
          <div className="overflow-y-auto h-[70vh] w-full max-w-4xl">
            <section className="py-6 px-3 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <h2 className="text-xl text-gray-500">
                September 2024 - Present
              </h2>
              <div className="flex flex-col ">
                <h1 className="text-2xl pb-2 font-bold">
                  Senior Software Engineer
                </h1>
                <h3 className="pb-4 text-sky-600 text-xl italic">
                  Civil Aviation of the Philippines
                </h3>
                <article className="text-gray-500">
                  Specialized in back-end engineering specifically for
                  aeronautical-based systems. Constructed UI/UX architecture
                  using Javascript and PHP frameworks. Collaborated with
                  executive members including contributing as head of major
                  projects of CAAP for web applications.
                </article>
              </div>
            </section>
            <section className="py-6 px-3 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <h2 className="text-xl text-gray-500">
                August 2023 - September 2024
              </h2>
              <div className="flex flex-col">
                <h1 className="text-2xl pb-2 font-bold">IT Consultant</h1>
                <h3 className="pb-4 text-sky-600 text-xl italic">
                  Civil Aviation of the Philippines
                </h3>
                <article className="text-gray-500">
                  Collaborated with management to implement business solutions
                  within the agency's IT infrastructure. Led and managed
                  end-user projects for both national and international
                  agencies, significantly enhancing the agency's IT systems.
                </article>
              </div>
            </section>
            <section className="py-6 px-3 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <h2 className="text-xl text-gray-500">
                January 2023 - August 2023
              </h2>
              <div className="flex flex-col">
                <h1 className="text-2xl pb-2 font-bold">Computer Programmer</h1>
                <h3 className="pb-4 text-sky-600 text-xl italic">
                  Civil Aviation of the Philippines
                </h3>
                <article className="text-gray-500">
                  Enhanced system efficiency and functionality by developing and
                  integrating robust Python-based solutions and maintaining
                  backend systems with PHP and Python. Contributed to
                  user-friendly interfaces using HTML, CSS, and JavaScript,
                  while collaborating with the UX team for seamless design.
                </article>
              </div>
            </section>
            <section className="py-6 px-3 mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <h2 className="text-xl text-gray-500">
                June 2022 - January 2023
              </h2>
              <div className="flex flex-col">
                <h1 className="text-2xl pb-2 font-bold">
                  Junior Operations Manager
                </h1>
                <h3 className="pb-4 text-sky-600 text-xl italic">
                  Centrive Technologies, Inc.
                </h3>
                <article className="text-gray-500">
                  Utilized data analytics to identify and rectify operational
                  inefficiencies, improving workflow. Developed and maintained
                  databases for accurate and timely data collection and
                  reporting. Assisted in creating insightful reports and
                  presentations for management, supporting decision-making. .
                </article>
              </div>
            </section>
          </div>
        </section>
        <section className="hidden md:block rotate-90 text-xl italic text-gray-400 font-light">
          Scroll down for more! <i className="fas fa-arrow-right"></i>
        </section>
      </div>
    </div>
  );
}

export default Experience;

import React from "react";
import dgcaIMG from "../../../assets/img/banner-v2.jpg";
import caapwebsiteIMG from "../../../assets/img/caap-website.png";
import aiswebsiteIMG from "../../../assets/img/ais-website.png";
function Projects() {
  return (
    <div>
      <h1 className="py-8 font-semibold text-2xl md:text-3xl text-center">
        Innovative projects to which I contributed...
      </h1>
      <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-16 justify-evenly">
        <div class="group max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <img
            class="rounded-t-lg h-56 w-full object-cover object-center"
            src={aiswebsiteIMG}
            alt=""
          />
          <div class="p-4">
            <h5 class="mb-2 text-2xl md:text-3xl font-bold tracking-tight ">
              Aeronautical Information Publication
            </h5>
            <p class="mt-6 mb-3 font-normal text-gray-700 dark:text-gray-400">
              An online publication issued by or with the authority of a State
              and containing aeronautical information of a lasting character
              essential to air navigation. Contains details of regulations,
              procedures and other information pertinent to the operation of
              aircraft in the particular country to which it relates.
            </p>
            <div className="pt-4">
              <a
                href="https://ais.caap.gov.ph"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="group max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <img
            class="rounded-t-lg h-56 w-full object-cover object-center"
            src={dgcaIMG}
            alt=""
          />
          <div class="p-4">
            <h5 class="mb-2 text-2xl md:text-3xl font-bold tracking-tight ">
              DGCA 59 International Conference Website
            </h5>
            <p class="mt-6 mb-3 font-normal text-gray-700 dark:text-gray-400">
              A content management system that provides comprehensive
              information and resources for attendees, including schedules,
              speaker details, venue information, and registration options. It
              ensures a seamless experience for participants by offering easy
              navigation, real-time updates, and essential support for all
              conference-related needs.
            </p>
            <div className="pt-4">
              <a
                href="https://dgca59.ph"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="group max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <img
            class="rounded-t-lg h-56 w-full object-cover object-center"
            src={caapwebsiteIMG}
            alt=""
          />
          <div class="p-4">
            <h5 class="mb-2 text-2xl md:text-3xl font-bold tracking-tight ">
              CAAP Official Website
            </h5>
            <p class="mt-6 mb-3 font-normal text-gray-700 dark:text-gray-400">
              A public information website that offers essential information and
              resources related to aviation safety, regulations, and services in
              the Philippines. It provides updates, guidelines, and support for
              aviation professionals, stakeholders, and the public, ensuring a
              streamlined and informative user experience.
            </p>
            <div className="pt-4">
              <a
                href="https://caap.gov.ph"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Visit Website
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

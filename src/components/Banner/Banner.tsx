"use client";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="mt-32 relative bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col space-y-10">
        {/* Top Content (Team Section) */}
        <div className="text-center">
          <h2 className="flex items-center justify-center space-x-2">
            <Image
              height={22}
              width={22}
              src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c9d2f6c7e84e4832bf49d968042f0b80/20/nGa1B4amegH1is8rSiQ/team.png"
              alt="Team Icon"
            />
            <span className="text-sm text-gray-800 font-semibold tracking-widest	 uppercase">Marketing Team</span>
          </h2>
          <h1 className="text-3xl md:text-[52px] text-gray-800 mt-10 mb-8">
            Fuel your brand<sup>®</sup>
          </h1>
          <p
            className="text-gray-800 text-base md:text-lg leading-relaxed mx-auto mb-6"
            style={{ maxWidth: "730px" }}
          >
            With Marketing 360<sup>®</sup>, you not only get the tools you need
            to manage your business, but you get the dedicated marketing team
            you need to grow it — all in one platform. Plus, leverage
            industry-specific marketing programs that actually work. Explore
            plans and pricing to learn more.
          </p>
          <div className="mt-4 mb-6">
            <Button variant="contained" color="primary" size="large">
              Plans & Pricing
            </Button>
          </div>
          <i className="text-gray-500 italic text-sm">
            Plus, get a free trial. No credit card required.
          </i>
        </div>

        {/* Bottom Content (Image Section) */}
        <div className="relative mx-auto" style={{ maxWidth: "700px" }}>
          {/* Decorative Badge */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white shadow-lg p-3 sm:p-4 rounded-lg flex flex-col items-center w-32 sm:w-40 text-center">
            <span className="text-blue-600 text-base sm:text-lg font-bold">
              Top Rated
            </span>
            <p className="text-gray-600 text-xs sm:text-sm">
              #1 Marketing Platform for Small Business
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/ab4f432d295d412d8b2dc03f8bc39031/20/4SoifmQp45JMgBnHndfLg/teamvideoimage.png"
              alt="Marketing Team"
              className="rounded-md shadow-lg w-full h-auto"
            />
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white shadow-md p-2 sm:p-3 rounded-lg flex items-center space-x-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 9.832v4.336M7.5 6.5L6 8m5.5-4L6 8m10 0L6 8m5.5-4L6 8m10 0L6 8m5.5-4L6 8m10 0L6 8"
                  />
                </svg>
              </div>
              <p className="text-gray-800 text-sm sm:text-base font-medium">
                3 Minute Video
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

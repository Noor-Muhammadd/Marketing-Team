import Image from "next/image";
import React from "react";

const Works = () => {
  return (
    <div>
      {/* First Section */}
      <h1 className="mt-10 mb-10 text-[41px] font-semibold text-center ">Here&apos;s how it works        </h1>
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c2a560b36a5d42fea3e983cb4d4d60c0/20/4SoifmQp45JMgBnHndfLg/howItWorks1.png"
            alt="Talented team"
            height={500}
            width={500}
            className="rounded-lg shadow-lg w-full md:w-[620px] md:h-[508px]"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center px-4 md:px-0">
          <div>
            <h2 className="text-xl sm:text-lg font-bold text-gray-700">
            Kickoff Call
            </h2>
            <p className="text-gray-600">
            You start with a kickoff call between you and your dedicated Marketing Success Manager so they can gain a full understanding of your business and overall goals.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-xl sm:text-lg font-bold text-gray-700">Strategy Planning
            </h2>
            <p className="text-gray-600">
            Once your Marketing Success Manager understands your goals and your budget, they will coordinate with the other teammates working to grow your brand to begin the initial strategies.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-lg font-bold text-gray-700">
            Onboarding & Launch
            </h2>
            <p className="text-gray-600">
            Once you approve the strategy, your Marketing Success Manager and team will begin the platform onboarding and training process as well as set everything up for a successful launch.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Right Text Section */}
        <div className="flex flex-col justify-center px-4 md:px-0">
          <div>
            <h2 className="text-xl sm:text-lg font-bold text-gray-700">
              Communicate & Advice
            </h2>
            <p className="text-gray-600">
              Your Marketing Success Manager stays in constant communication
              with their own team and with you to provide feedback, advice, and
              ideas on ways you can further grow your business.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-xl sm:text-lg font-bold text-gray-700">Quality Control</h2>
            <p className="text-gray-600">
              Your dedicated team strives to provide you the highest quality of
              work, whether that be via design, content, video, ads, or more.
              They use your feedback to improve over time.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl sm:text-lg font-bold text-gray-700">
              Analyze & Awesomize
            </h2>
            <p className="text-gray-600">
              Your dedicated team will constantly analyze your business and make
              improvements based on data in order to drive you the best return
              on investment over time.
            </p>
          </div>
        </div>

        {/* Left Image Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c9a60f520a7c4c1f9d52fb9984c9fda7/20/4SoifmQp45JMgBnHndfLg/howItWorks2.png"
            alt="Talented team"
            height={500}
            width={500}
            className="rounded-lg shadow-lg w-full md:w-[620px] md:h-[508px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;

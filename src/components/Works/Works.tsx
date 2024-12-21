import React from "react";

const Works = () => {
  return (
    <div>
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="flex justify-center md:justify-start">
          <img
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c2a560b36a5d42fea3e983cb4d4d60c0/20/4SoifmQp45JMgBnHndfLg/howItWorks1.png"
            alt="Talented team"
            className="rounded-lg shadow-lg"
            style={{ width: "620px", height: "508px" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <div className="">
            <h2 className="text-xl font-bold text-gray-700">
              Communicate & Advice
            </h2>
            <p className="text-gray-600">
              Your Marketing Success Manager stays in constant communication
              with their own team and with you to provide feedback, advice, and
              ideas on ways you can further grow your business.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-700">Quality Control</h2>
            <p className="text-gray-600">
              Your dedicated team strives to provide you the highest quality of
              work, whether that be via design, content, video, ads, or more.
              They use your feedback to improve over time.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-700">
              Analyze & Awesomize
            </h2>
            <p className="text-gray-600">
              Your dedicated team will constantly analyze your business and make
              improvements based on data in order to drive you the best return
              on investment over time.
            </p>
          </div>
        </div>
      </div>

      <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <div className="">
            <h2 className="text-xl font-bold text-gray-700">
              Communicate & Advice
            </h2>
            <p className="text-gray-600">
              Your Marketing Success Manager stays in constant communication
              with their own team and with you to provide feedback, advice, and
              ideas on ways you can further grow your business.
            </p>
          </div>

          <div className="my-6">
            <h2 className="text-xl font-bold text-gray-700">Quality Control</h2>
            <p className="text-gray-600">
              Your dedicated team strives to provide you the highest quality of
              work, whether that be via design, content, video, ads, or more.
              They use your feedback to improve over time.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-700">
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
          <img
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c9a60f520a7c4c1f9d52fb9984c9fda7/20/4SoifmQp45JMgBnHndfLg/howItWorks2.png"
            alt="Talented team"
            className="rounded-lg shadow-lg"
            style={{ width: "620px", height: "508px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;

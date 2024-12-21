import { Button } from "@mui/material";

// components/IndustrySection.js
export default function IndustrySection() {
  return (
    <section className="py-16">
      <h2 className=" text-center md:text-[46px] font-bold text-gray-800 mb-4">
        Industry specific marketing programs
        <br />
        and talent to help you...
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="md:flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Achieve marketing success
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Marketing is always changing and evolving. Partner with a dedicated
            Marketing Success Manager who works as hard as you do to help you
            stay ahead of the curve. They focus on creating and executing modern
            digital marketing strategies to help you grow your business.{" "}
            <a href="#" className="text-blue-600">
              Watch this video.
            </a>
          </p>
          <div className="mt-10 items-start">
            <Button variant="contained" color="primary" size="large">
              Plans & Pricing
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:flex-1">
          <img
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/a29ea934d7d7469bbad387ebf5e89735/20/4SoifmQp45JMgBnHndfLg/successManager.png"
            alt="Marketing Success Manager"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
}

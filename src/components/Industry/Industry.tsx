import { Button } from "@mui/material";
import Image from "next/image";

export default function IndustrySection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <h2 className="text-center text-2xl md:text-[46px] font-bold text-gray-800 mb-8 leading-tight">
        Industry-specific marketing programs
        <br className="hidden md:block" />
        and talent to help you...
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-3xl font-semibold text-gray-800 mb-4">
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
          <div className="flex justify-center md:justify-start">
            <Button variant="contained" color="primary" size="large">
              Plans & Pricing
            </Button>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/a29ea934d7d7469bbad387ebf5e89735/20/4SoifmQp45JMgBnHndfLg/successManager.png"
            alt="Marketing Success Manager"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-full"
            height={500}
            width={500}
          />
        </div>
      </div>
    </section>
  );
}

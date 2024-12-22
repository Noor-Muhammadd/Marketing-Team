import Image from "next/image";
import React from "react";
import Button from "@mui/material/Button";
import team from "../../assets/icons/team.png";
import website from "../../assets/icons/website.png";
import shop from "../../assets/icons/shopApp.png";
import payment from "../../assets/icons/Payments.png";
import scale from "../../assets/icons/Point_of_sale.png";
import crm from "../../assets/icons/CRM.png";
import form from "../../assets/icons/Forms.png";
import listening from "../../assets/icons/Listings.png";
import repu from "../../assets/icons/Reputation.png";
import social from "../../assets/icons/Social2.png";
import content from "../../assets/icons/Content.png";
import camp from "../../assets/icons/camp.png";
import intelligence from "../../assets/icons/Intelligence.png";
import mobile from "../../assets/icons/mobileApp.png";

export default function Benefits() {
  const benefits = [
    { title: "Marketing Team", description: "Team to turbocharge your marketing", icon: team },
    { title: "Websites", description: "Success starts with a modern website", icon: website },
    { title: "Ecommerce", description: "Sell your products everywhere online", icon: shop },
    { title: "Payments", description: "Get paid easier, faster, your way", icon: payment },
    { title: "Point of Sale", description: "All-in-one business management", icon: scale },
    { title: "CRM", description: "Stay organized as you scale and grow", icon: crm },
    { title: "Forms", description: "Create forms for anything", icon: form },
    { title: "Email Marketing", description: "Stay top of mind with email and text", icon: website },
    { title: "Listings", description: "Get found on 50+ local sites/apps", icon: listening },
    { title: "Reputation", description: "Gain the edge of a good reputation", icon: repu },
    { title: "Social", description: "Streamline your social media", icon: social },
    { title: "Content", description: "Level up your content marketing", icon: content },
    { title: "Ads", description: "Fuel growth with multi-channel ads", icon: camp },
    { title: "Intelligence", description: "In-depth reporting you need to win", icon: intelligence },
    { title: "Mobile App", description: "Learn more about our mobile app", icon: mobile },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Plus, all of these great benefits.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Everything you need to compete and win online. Not only do you get the
          tools you need to manage your business, but you also get the dedicated
          marketing team you need to grow your business — all in one platform.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-6 shadow-sm rounded-lg"
            >
              <div className="flex text-start gap-6 items-center mb-4">
                <div className="text-xl text-blue-500">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={25}
                    height={25}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button variant="outlined" size="large">
            See how it all works in your industry
          </Button>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl leading-[70px]	 sm:text-[52px] font-semibold text-gray-800">
            Get everything you need to <br />
            <span className="text-blue-600">manage and grow</span> your
            business.
          </h1>

          {/* Button */}
          <div className="mb-10 mt-6">
            <Button variant="contained" size="large">
              Plans & Pricing
            </Button>
          </div>

          {/* Subtext */}
          <i className="text-sm text-gray-500">
            Plus, get a free trial. No credit card required.
          </i>
        </div>
      </div>

      <div className="bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Star Ratings */}
          <div className="flex items-center space-x-2 text-yellow-500 text-2xl">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
            <p className="text-gray-800 font-medium text-lg">3,500+ Reviews</p>
          </div>

          {/* Logos */}
          <div className="flex items-center justify-center mt-6 space-x-6">
            <Image
              src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/ca3ca44f4c0b4606a30e7d590b0bb143/20/5feFb8zhrk/capterra.png"
              alt="Capterra"
              width={120}
              height={30}
              className="grayscale hover:grayscale-0 transition"
            />
            <Image
              src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/aa29c4572aea40d3a2d2c912a1f2a79b/20/5feFb8zhrk/getapp.png"
              alt="GetApp"
              width={120}
              height={30}
              className="grayscale hover:grayscale-0 transition"
            />
            <Image
              src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/d49130eae7ce48128f4e523a70f78959/20/5feFb8zhrk/software-advice.png"
              alt="Software Advice"
              width={120}
              height={30}
              className="grayscale hover:grayscale-0 transition"
            />
            <Image
              src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e2c95d4fd45f466e853ec9da5ebb4bd5/20/5feFb8zhrk/top-rated-local.png"
              alt="Top Rated"
              width={120}
              height={30}
              className="grayscale hover:grayscale-0 transition"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

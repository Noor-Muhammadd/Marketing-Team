"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa"; // Dropdown icon
import { useState } from "react";

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

const moreOptions = [
  {
    title: "About",
    description: "Description for Option One.",
  },
  {
    title: "Create Service",
    description: "Description for Option Two.",
  },
  {
    title: "Success Stories",
    description: "Description for Option Three.",
  },
  {
    title: "Our Reviews",
    description: "Description for Option One.",
  },
  {
    title: "Partners",
    description: "Description for Option Two.",
  },
  {
    title: "Market Place",
    description: "Description for Option Three.",
  },
  {
    title: "Blog",
    description: "Description for Option Three.",
  },
  {
    title: "Support",
    description: "Description for Option Three.",
  },
  {
    title: "Contact Us",
    description: "Description for Option Three.",
  },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/d1feb05dadf64d96a13a86ad1575c681/20/5feFb8zhrk/logo.png"
            alt="logo"
            height={30}
            width={170}
          />
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Tour Platform */}
            <div className="group relative">
              <button className="ml-8 flex items-center text-gray-700 font-bold hover:text-blue-500">
                Tour Platform <FaChevronDown className="ml-2 text-blue-500 text-sm" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-6 w-[850px]">
                {/* Adjusted width for dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex flex-col bg-white p-4 shadow-sm rounded-lg"
                    >
                      <div className="flex text-start gap-4 items-center mb-2">
                        <div className="text-xl text-blue-500">
                          <Image
                            src={benefit.icon} // Ensure the icon paths are correct
                            alt={benefit.title}
                            width={30} // Adjust icon size if needed
                            height={30}
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <Link
              href="/tour-by-industry"
              className="text-gray-700 font-bold hover:text-blue-500"
            >
              Tour by Industry
            </Link>

            {/* More Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-gray-700 font-bold hover:text-blue-500">
                More <FaChevronDown className="ml-2 text-blue-500 text-sm" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-6 w-[750px]">
                {/* Adjusted width for dropdown */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {moreOptions.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex flex-col bg-white p-4 shadow-sm rounded-lg"
                    >
                      <div className="flex text-start gap-6 items-center mb-2">
                        <div>
                          <h3 className="text-base font-semibold mb-2 text-gray-900">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{benefit.description}</p>
                        <hr  className="mt-8"/>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/careers" className="text-gray-700 font-bold hover:text-blue-500">
              Careers
            </Link>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="hidden md:block text-gray-700">
            <MdOutlineCall size={25} />
          </button>

          <Link
            href="/login"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
          >
            Login
          </Link>

          <Link
            href="/pricing"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Plans & Pricing
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-gray-700"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link href="/features" className="text-gray-700 font-bold">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-700 font-bold">
              Pricing
            </Link>
            <Link href="/retail" className="text-gray-700 font-bold">
              Retail
            </Link>
            <Link href="/real-estate" className="text-gray-700 font-bold">
              Real Estate
            </Link>
            <Link href="/more" className="text-gray-700 font-bold">
              More
            </Link>
            <Link href="/careers" className="text-gray-700 font-bold">
              Careers
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
            >
              Login
            </Link>
            <Link
              href="/pricing"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Plans & Pricing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default dynamic(() => Promise.resolve(Navbar), { ssr: true });

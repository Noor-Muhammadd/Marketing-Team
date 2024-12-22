"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

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
            <div className="group relative">
              <button className="ml-8 text-gray-700 font-bold hover:text-blue-500">
                Tour Platform
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2 w-48">
                <Link
                  href="/features"
                  className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 rounded"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 rounded"
                >
                  Pricing
                </Link>
              </div>
            </div>
            <div className="group relative">
              <button className="text-gray-700 font-bold hover:text-blue-500">
                Tour by Industry
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md p-2 w-48">
                <Link
                  href="/retail"
                  className="block font-bold px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Retail
                </Link>
                <Link
                  href="/real-estate"
                  className="block font-bold px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                >
                  Real Estate
                </Link>
              </div>
            </div>
            <Link
              href="/more"
              className="text-gray-700 font-bold hover:text-blue-500"
            >
              More
            </Link>
            <Link
              href="/careers"
              className="text-gray-700 font-bold hover:text-blue-500"
            >
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

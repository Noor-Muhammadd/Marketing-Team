import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#24282f] text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Logo and Badges */}
                    <div>
                        <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f32938a8bb624560a72e1ae1ac65255f/20/5feFb8zhrk/logoWhite.png" alt="Marketing 360" width={150} height={50} />
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e1b23a7033c04eae8049539092070d7f/20/5feFb8zhrk/badgeinc5000-100.png" alt="Inc 5000" width={100} height={60} />
                            <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/c73c91a27fbd498f954414161c5cda23/20/5feFb8zhrk/badgeglassdoor-100.png" alt="Glassdoor" width={100} height={60} />
                            <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f0616151c6d4482993fa80e7a98de47a/20/5feFb8zhrk/badgefamily-100.png" alt="Family Owned" width={100} height={60} />
                            <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/febb154b881e4946b405d662d882c753/20/5feFb8zhrk/militaryDiscount230.png" alt="Military Discount" width={100} height={60} />
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="font-bold text-gray-200">Tour Platform</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Marketing Team</a></li>
                            <li><a href="#" className="hover:text-white">Website</a></li>
                            <li><a href="#" className="hover:text-white">Ecommerce</a></li>
                            <li><a href="#" className="hover:text-white">Payments</a></li>
                            <li><a href="#" className="hover:text-white">Point of Sale</a></li>
                            <li><a href="#" className="hover:text-white">CRM</a></li>
                            <li><a href="#" className="hover:text-white">Forms</a></li>
                        </ul>
                    </div>

                    {/* Industry Links */}
                    <div>
                        <h4 className="font-bold text-gray-200">Tour by Industry</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">E-Commerce</a></li>
                            <li><a href="#" className="hover:text-white">Contractor</a></li>
                            <li><a href="#" className="hover:text-white">Fitness</a></li>
                            <li><a href="#" className="hover:text-white">Medical</a></li>
                            <li><a href="#" className="hover:text-white">Real Estate</a></li>
                            <li><a href="#" className="hover:text-white">Attorney</a></li>
                            <li><a href="#" className="hover:text-white">More Industries...</a></li>
                        </ul>
                    </div>

                    {/* More Links */}
                    <div>
                        <h4 className="font-bold text-gray-200">More</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Creative Services</a></li>
                            <li><a href="#" className="hover:text-white">Success Stories</a></li>
                            <li><a href="#" className="hover:text-white">Our Reviews</a></li>
                            <li><a href="#" className="hover:text-white">Partner With Us</a></li>
                            <li><a href="#" className="hover:text-white">Marketplace</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold text-gray-200">Support</h4>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#" className="hover:text-white">Online Help</a></li>
                            <li><a href="#" className="hover:text-white">Contact Us</a></li>
                            <li><span className="text-gray-400">Sales:</span> 833-203-9165</li>
                            <li><span className="text-gray-400">Client Services:</span> 855-773-8171</li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Social Media */}
                    <div className="flex space-x-4">
                        <a className="gap-2" href="#">
                            <BsFacebook size={24} />
                        </a>
                        <a className="gap-2" href="#">
                            <FaYoutube size={24} />
                        </a>
                        <a className="gap-2" href="#">
                            <FaInstagram size={24} />
                        </a>
                        <a className="gap-2" href="#">
                            <FaXTwitter size={24} />
                        </a>
                        <a className="gap-2" href="#">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>

                    {/* Legal Links */}
                    <p className="mt-4 md:mt-0 text-sm text-gray-500">
                        Madwire LLC is a registered Independent Sales Organization of Wells Fargo Bank, N.A., Concord, CA.
                    </p>
                </div>

                {/* Mobile App */}
                <div className="mt-6 text-center">
                    <p>Create a Marketing 360® account and download our mobile app:</p>
                    <div className="mt-4 flex justify-center space-x-4">
                        <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/b544bad06f7049c094893b37c2b5082b/20/5feFb8zhrk/appStoreLnk.png" alt="App Store" width={120} height={40} />
                        <Image src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/b17c869fb12c4a999510da01db1bcbfe/20/5feFb8zhrk/google-play-badge.png" alt="Google Play" width={120} height={40} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

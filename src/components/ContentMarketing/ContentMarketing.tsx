"use client"
import { Button } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";

function ContentMarketing() {
    return (
        <div className="bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f4abfb9f2d4f4460ab4bf4b6a8b477ba/20/4SoifmQp45JMgBnHndfLg/contentMarketer.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-none"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                            <a href="#" className="text-blue-600">
                                Watch this video.
                            </a>
                        </p>
                    </div>
                    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
                        <Button variant="contained" color="primary" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>
            </div>


            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
                {/* Text Section */}
                <div>
                    <div className="flex flex-col justify-center space-y-4 text-center md:text-left mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Stand out on social media
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Smart marketing is about being where your customers are, and they’re on social media! If you don’t have a presence on social media, you’re losing market share and sales to your competitors. Our social media management program will help you fix that.
                            <a href="#" className="text-blue-600">
                                Watch this video.
                            </a>
                        </p>
                    </div>
                    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
                        <Button variant="contained" color="primary" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/a60e9ce3da774e05900bca1b694ddde5/20/4SoifmQp45JMgBnHndfLg/SocialMediaManager.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-none"
                    />
                </div>
            </div>


            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/dc6968fbc63645dd87fe4e7c8af0b143/20/4SoifmQp45JMgBnHndfLg/adSpecialist.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-none"
                    />
                </div>

                {/* Text Section */}
                <div>
                    <div className="flex flex-col justify-center space-y-4 text-center md:text-left mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Grow with multi-channel ads
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            If you&apos;re not promoting your brand across today&apos;s most popular digital channels, you&apos;re losing sales to your competitors. Our multi-channel advertising program will help you regain those sales by running eye-catching ads for your brand across search, social, display and beyond. Watch this video.
                            <a href="#" className="text-blue-600">
                                Watch this video.
                            </a>
                        </p>
                    </div>
                    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
                        <Button variant="contained" color="primary" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>
            </div>



            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
                {/* Text Section */}
                <div>
                    <div className="flex flex-col justify-center space-y-4 text-center md:text-left mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Build a professional brand
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Whether you need professional design services, videos, photography, or logos, our team has you covered. Store all your important brand information in your Brand Profile, and use automated tools to quickly synchronize your current brand assets with the Marketing 360 platform.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                            Need help communicating your brand? Leverage our AI Assistant to create slogans, product and services descriptions and more.
                            <a href="#" className="text-blue-600">
                                Watch this video.
                            </a>
                        </p>
                    </div>
                    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
                        <Button variant="contained" color="primary" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e34286e23bc1413dac816cd708a90a80/20/4SoifmQp45JMgBnHndfLg/designProfessional.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-none"
                    />
                </div>
            </div>



            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-8">

                 {/* Image Section */}
                 <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/cea03c3bf52c4a888b491d7c2fff11e4/20/4SoifmQp45JMgBnHndfLg/support.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full"
                    />
                </div>


                {/* Text Section */}
                <div>
                    <div className="flex flex-col justify-center space-y-4 text-center md:text-left mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                        Fully leverage the platform
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        Enjoy best-in-class platform support, from our rich online help center to our hands-on onboarding process, all the way through to ongoing customer support and success.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
                        <Button variant="contained" color="primary" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>

               
            </div>


            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 lg:px-8">
                {/* Text Section */}
                <div>
                    <div className="flex flex-col justify-center space-y-4 text-center md:text-left mb-6">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                        AI Assistant
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        In the fast-paced world of online marketing, staying ahead means constantly generating fresh content, compelling visuals, and innovative ideas. Our time saving AI tools are designed to do just that. Effortlessly create high-quality content, stunning images, and unique marketing concepts that resonate with your audience and hep you outshine the competition.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-10 flex justify-center md:justify-start">
                        <Button variant="contained" color="primary" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e2476d6b67e849c89d79cce278035159/20/4SoifmQp45JMgBnHndfLg/ai-assistant.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-full"
                    />
                </div>
            </div>


            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/ea8208629b9341ac84a8eea6474f21a7/20/4SoifmQp45JMgBnHndfLg/talentedTeam-left.png"
                        height={510}
                        width={620}
                        alt="Talented team"
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
                    />
                </div>

                {/* Right Text Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl text-gray-700 font-bold mb-3">Why it’s important to have a
                        <br />
                        talented team
                    </h1>
                    <div className="">
                        <h2 className="text-xl font-bold text-gray-700">
                        Save Time
                        </h2>
                        <p className="text-gray-600">
                        Marketing today is extremely complicated and time-consuming. Since you&apos;re busy running your business, it’s key to have a team of digital marketing specialists dedicated to your success
                        </p>
                    </div>

                    <div className="my-6">
                        <h2 className="text-xl font-bold text-gray-700">
                        Save Money
                        </h2>
                        <p className="text-gray-600">
                        Hiring a skilled in-house digital marketing team can be extremely expensive. With Marketing 360®, you get a highly talented and dedicated team at a fraction of the cost
                        </p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-700">
                        Stay Ahead
                        </h2>
                        <p className="text-gray-600">
                        Marketing is changing at a rapid pace. Your dedicated team helps you stay ahead of the curve and the competition
                        </p>
                    </div>

                    <div>
                        <Button variant="contained" size="large">
                            Plans & Pricing
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default dynamic(() => Promise.resolve(ContentMarketing), { ssr: true });




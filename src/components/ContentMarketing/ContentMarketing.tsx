"use client"
import { Button } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";

function ContentMarketing() {
    return (
        <div className="bg-gray-50 py-12 px-6">
            <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/f4abfb9f2d4f4460ab4bf4b6a8b477ba/20/4SoifmQp45JMgBnHndfLg/contentMarketer.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
                    />
                </div>

                {/* Text Section */}
                <div>
                    <div
                        className="flex flex-col justify-center space-y-6 text-center md:text-left mb-6"
                        style={{ width: "465px", height: "172px" }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Button variant='contained' color='primary' size='large'>
                            Plans & Pricing
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-20max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <div
                        className="flex flex-col justify-center space-y-6 text-center md:text-left mb-6"
                        style={{ width: "465px", height: "172px" }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Button variant='contained' color='primary' size='large'>
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
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
                    />
                </div>
            </div>

            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/dc6968fbc63645dd87fe4e7c8af0b143/20/4SoifmQp45JMgBnHndfLg/adSpecialist.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
                    />
                </div>

                {/* Text Section */}
                <div>
                    <div
                        className="flex flex-col justify-center space-y-6 text-center md:text-left mb-6"
                        style={{ width: "465px", height: "172px" }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Button variant='contained' color='primary' size='large'>
                            Plans & Pricing
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <div
                        className="flex flex-col justify-center space-y-6 text-center md:text-left mb-6"
                        style={{ width: "465px", height: "172px" }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Button variant='contained' color='primary' size='large'>
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
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
                    />
                </div>
            </div>
            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/cea03c3bf52c4a888b491d7c2fff11e4/20/4SoifmQp45JMgBnHndfLg/support.png"
                        alt="Happy woman"
                        height={510}
                        width={620}
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
                    />
                </div>

                {/* Text Section */}
                <div>
                    <div
                        className="flex flex-col justify-center space-y-6 text-center md:text-left mb-6"
                        style={{ width: "465px", height: "172px" }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Button variant='contained' color='primary' size='large'>
                            Plans & Pricing
                        </Button>
                    </div>
                </div>
            </div>
            <div className="my-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <div>
                    <div
                        className="flex flex-col justify-center space-y-6 text-center md:text-left mb-6"
                        style={{ width: "465px", height: "172px" }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900">
                            Win with content marketing
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you don’t invest in organic growth, you’ll always be a hamster
                            on a wheel with a high cost per acquisition and low ROI. Our
                            content marketing and SEO program will help you steadily grow your
                            brand’s organic awareness and results from search, social, email,
                            SEO, and beyond.
                        </p>
                    </div>
                    <div className="mt-10">
                        <Button variant='contained' color='primary' size='large'>
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
                        className="rounded-lg shadow-lg"
                    // style={{ width: "620px", height: "508px" }}
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
                    <h1 className="text-3xl text-gray-900 font-bold">Why it’s important to have a
                        <br />
                        talented team
                    </h1>
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
                        <h2 className="text-xl font-bold text-gray-700">
                            Quality Control
                        </h2>
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




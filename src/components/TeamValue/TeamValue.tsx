import { Button } from "@mui/material";

export default function TeamValue() {
  const values = [
    {
      title: "Positive Attitude",
      description:
        "Attitude is about how we choose to look at every situation. It's about finding the wins in the failures, the joy in the process and the happiness in the work.",
      image: "/positive-attitude.jpg",
    },
    {
      title: "Hard Work",
      description:
        "You can always count on your team to work their hardest. Effort is a key pillar of our success, and we'll put that to work for you.",
      image: "/hard-work.jpg",
    },
    {
      title: "Top-Tier Performance",
      description:
        "With a positive attitude and focused effort, marketing performance is sure to shine through. Your team is dedicated to helping your small business grow.",
      image: "/top-tier-performance.jpg",
    },
  ];
  const values2 = [
    {
      title: "Provide Value",
      description:
        "Whether it's specific insights about the marketing data or the listening ear for a new business idea, you can count on your team to add value where you need them most.",
      image: "/provide-value.jpg",
    },
    {
      title: "Identify Opportunities",
      description:
        "Your team will keep an eye out for opportunities for additional growth, helping you capture more market share and increase sales.",
      image: "/identify-opportunities.jpg",
    },
    {
      title: "Your Partner in Growth",
      description:
        "Your team will treat your business as their own and will truly work to become your trusted partner in the growth of your brand.",
      image: "/partner-in-growth.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Here’s a list of things your team <br /> continually does to provide you  <br /> maximum value
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden flex flex-col"
          >
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {value.title}
              </h2>
              
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
      <img src="https://static.mywebsites360.com/c7cc6c7a55d9438c8f49111c9b6bf109/i/e46de42d5ae343a781e2637502b6645a/20/GCuCv726gZycFxatRE56zp/teamBanner.png" alt="" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {values2.map((value, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden flex flex-col"
          >
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {value.title}
              </h2>
              
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="contained" size="large">
          Plans & Pricing
        </Button>
      </div>
    </div>
  );
}

import dynamic from 'next/dynamic';
import React from 'react';

const Banner = dynamic(() => import("@/components/Banner/Banner"), { ssr: true });
const Benefits = dynamic(() => import("@/components/Benifits/Benifits"), { ssr: true });
const WhyChooseUs = dynamic(() => import("@/components/Choose/Choose"), { ssr: true });
const ContentMarketing = dynamic(() => import("@/components/ContentMarketing/ContentMarketing"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer/Footer"), { ssr: true });
const IndustrySection = dynamic(() => import("@/components/Industry/Industry"), { ssr: true });
const Navbar = dynamic(() => import("@/components/Navbar/Navbar"), { ssr: true });
const Marketing360Reasons = dynamic(() => import("@/components/Reasons/Reasons"), { ssr: true });
const TeamValue = dynamic(() => import("@/components/TeamValue/TeamValue"), { ssr: true });
const Works = dynamic(() => import("@/components/Works/Works"), { ssr: true });


const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <IndustrySection></IndustrySection>
      <ContentMarketing></ContentMarketing>
      <TeamValue></TeamValue>
      <Works></Works>
      <Marketing360Reasons></Marketing360Reasons>
      <WhyChooseUs></WhyChooseUs>
      <Benefits></Benefits>
      <Footer></Footer>
    </div>
  );
};

export default page;
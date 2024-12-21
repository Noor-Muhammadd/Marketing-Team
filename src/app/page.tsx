import Banner from '@/components/Banner/Banner';
import Benefits from '@/components/Benifits/Benifits';
import WhyChooseUs from '@/components/Choose/Choose';
import ContentMarketing from '@/components/ContentMarketing/ContentMarketing';
import Footer from '@/components/Footer/Footer';
import IndustrySection from '@/components/Industry/Industry';
import Navbar from '@/components/Navbar/Navbar';
import Marketing360Reasons from '@/components/Reasons/Reasons';
import TeamValue from '@/components/TeamValue/TeamValue';
import Works from '@/components/Works/Works';
import React from 'react';

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
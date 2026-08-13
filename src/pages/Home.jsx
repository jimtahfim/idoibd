import React from 'react';
import Hero from '../components/sections/Hero';
import QuickStats from '../components/sections/QuickStats';
import ServicesStrip from '../components/sections/ServicesStrip';
import VideoIntro from '../components/sections/VideoIntro';
import CoursesSection from '../components/sections/CoursesSection';
import Categories from '../components/sections/Categories';
import LearningOutcomes from '../components/sections/LearningOutcomes';
import WebinarSchedule from '../components/sections/WebinarSchedule';
import Roadmap from '../components/sections/Roadmap';
import Testimonials from '../components/sections/Testimonials';
import NoticeBoard from '../components/sections/NoticeBoard';
import AdmissionProcess from '../components/sections/AdmissionProcess';
import FAQ from '../components/sections/FAQ';
import AboutSummary from '../components/sections/AboutSummary';

const Home = () => {
  return (
    <>
      <Hero />
      <QuickStats />
      <NoticeBoard />
      <ServicesStrip />
      <VideoIntro />
      <CoursesSection />
      <Categories />
      <LearningOutcomes />
      <WebinarSchedule />
      <Roadmap />
      <Testimonials />
      <AdmissionProcess />
      <FAQ />
      <AboutSummary />
    </>
  );
};

export default Home;

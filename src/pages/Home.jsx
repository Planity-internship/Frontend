import React from "react";
import HeaderSection from "../components/HeaderSection";
import CurrentClassSection from "../components/CurrentClassSection";
import NoticeSection from "../components/NoticeSection";
import WeeklyScheduleSection from "../components/WeeklyScheduleSection";
import RegisteredInstitutesSection from "../components/RegisteredInstitutesSection";

const Home = () => (
  <div className="page-content">
    <HeaderSection />
    <CurrentClassSection />
    <NoticeSection />
    <WeeklyScheduleSection />
    <RegisteredInstitutesSection />
  </div>
);
export default Home;


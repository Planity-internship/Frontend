// src/pages/MainPage.jsx

import React from 'react';
import HeaderSection from '../components/HeaderSection';
import BottomNavBar from '../components/BottomNavBar';
import NoticeSection from '../components/NoticeSection';
import WeeklyScheduleSection from '../components/WeeklyScheduleSection';
import RegisteredInstitutesSection from '../components/RegisteredInstitutesSection';


const MainPage = () => {
  return (
    <div>
      <HeaderSection />
      <NoticeSection />
      <BottomNavBar />
      <WeeklyScheduleSection />
      <RegisteredInstitutesSection />
    </div>
  );
};

export default MainPage;

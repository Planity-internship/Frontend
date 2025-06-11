//@ts-nocheck
import React from 'react';
import HeaderSection from '../Home/compoment/HeaderSection.tsx';
import BottomNavBar from '../../components/BottomNavBar.tsx';
import NoticeSection from '../Home/compoment/NoticeSection.tsx';
import WeeklyScheduleSection from '../Home/compoment/WeeklyScheduleSection.tsx';
import RegisteredInstitutesSection from '../Home/compoment/RegisteredInstitutesSection.tsx';


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

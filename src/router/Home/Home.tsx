import BottomNavBar from "@/components/BottomNavBar";
import CurrentClassSection from "./compoment/CurrentClassSection";
import HeaderSection from "./compoment/HeaderSection";
import NoticeSection from "./compoment/NoticeSection";
import RegisteredInstitutesSection from "./compoment/RegisteredInstitutesSection";
import WeeklyScheduleSection from "./compoment/WeeklyScheduleSection";

const Home = () => (
  <>
    <div className="page-content">
      <HeaderSection />
      <CurrentClassSection />
      <NoticeSection />
      <WeeklyScheduleSection />
      <RegisteredInstitutesSection />
    </div>
    <BottomNavBar />
  </>
);
export default Home;

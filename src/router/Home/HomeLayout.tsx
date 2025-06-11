import BottomNavBar from "@/components/BottomNavBar";
import CurrentClassSection from "./compoment/CurrentClassSection";
import HeaderSection from "./compoment/HeaderSection";
import NoticeSection from "./compoment/NoticeSection";
import RegisteredInstitutesSection from "./compoment/RegisteredInstitutesSection";
import WeeklyScheduleSection from "./compoment/WeeklyScheduleSection";

function Home() {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="pt-5 pb-5 px-5 flex justify-end">
          <img
            // 추후 URL로 바꿔야 할듯
            src="/images/Icon.png"
            alt="notification"
            className="pr-2 h-7"
          />
        </div>
        {/**아래 컴포넌트만 변경할것 */}
        <div className="flex-1 pl-5 pr-5 flex flex-col gap-y-5 overflow-y-auto">
          <HeaderSection />
          <CurrentClassSection />
          <NoticeSection />
          <WeeklyScheduleSection />
          <RegisteredInstitutesSection />
          {/*Blank*/}
          <div className="h-[100px] w-auto">ㅤ</div>
        </div>
        {/**아래 컴포넌트 변경 금지 */}
        <BottomNavBar />
        <div />
      </div>
    </>
  );
}
export default Home;

import { Card } from "@/components/ui/card";
import "./CurrentClassSection.css";

const CurrentClassSection = () => {
  return (
    <>
      <Card className="p-0 pt-1 pb-4">
        <div className="grid">
          <div className="flex justify-between p-3 text-lg font-bold">
            <p>진행중인 수업</p>
            <p>튼튼 영어학원</p>
          </div>
          <div className="flex justify-between items-center pl-3 pr-3">
            <p className="text-3xl font-bold">17:00 ~ 18:40</p>
            <p className="class-status">수업 중</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CurrentClassSection;

import { Card } from "@/components/ui/card";
import "./CurrentClassSection.css";

// /** 수업 이름 또는 장소 (예: 학원 이름, 과목명 등) */
//     title: string;              // 예) "튼튼 영어학원"

//     /** 시작 시간 (24시간제, HH:mm 형식 문자열) */
//     startTime: string;          // 예) "17:00"

//     /** 종료 시간 (24시간제, HH:mm 형식 문자열) */
//     endTime: string;            // 예) "18:40"

//     /** 현재 상태 (수업 중, 보강 중, 대기 중 등) */
//     status: "수업 중" | "보강 중" | "대기 중";  // 예) "수업 중"


//     subject?: string;          // 과목명       예) "영어"

const CurrentClassSection = () => {
  return (
    <>
      <Card className="p-0 pt-1 pb-4">
        <div className="grid">
          <div className="flex justify-between p-3 text-lg font-bold">
            <p>진행중인 수업</p>
            <p>튼튼 영어학원</p>  {/*string*/}
          </div>
          <div className="flex justify-between items-center pl-3 pr-3">
            <p className="text-3xl font-bold">17:00 ~ 18:40</p>  {/*int*/}
            <p className="class-status">수업 중</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CurrentClassSection;

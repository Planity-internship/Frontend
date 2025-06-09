import  { useState } from "react";
import "./TimetablePage.css";
import BottomNavBar from "@/components/BottomNavBar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 요일과 시간대 정의
const days = ["일", "월", "화", "수", "목", "금", "토"];
const hours = Array.from({ length: 17 }, (_, i) => i + 8); // 8~24시

const TimetablePage = () => {
  const [schedule, setSchedule] = useState([
    { day: 1, start: 12, end: 13, subject: "학교수업", color: "#fecaca" }, // 월요일 12-13시
    { day: 2, start: 12, end: 13, subject: "학교수업", color: "#fecaca" }, // 화요일 12-13시
    { day: 3, start: 12, end: 13, subject: "학교수업", color: "#fecaca" }, // 수요일 12-13시
    { day: 4, start: 12, end: 13, subject: "학교수업", color: "#fecaca" }, // 목요일 12-13시
    { day: 5, start: 12, end: 13, subject: "학교수업", color: "#fecaca" }, // 금요일 12-13시
    { day: 6, start: 11, end: 12, subject: "수영", color: "#c7d2fe" }, // 토요일 11-12시
    { day: 2, start: 17, end: 18, subject: "영어", color: "#fed7aa" }, // 화요일 17-18시
    { day: 4, start: 17, end: 18, subject: "영어", color: "#fed7aa" }, // 목요일 17-18시
    { day: 6, start: 17, end: 18, subject: "영어", color: "#fed7aa" }, // 토요일 17-18시
    { day: 1, start: 19, end: 20, subject: "수학", color: "#fca5a5" }, // 월요일 19-20시
    { day: 5, start: 19, end: 20, subject: "수학", color: "#fca5a5" }, // 금요일 19-20시
    { day: 1, start: 21, end: 23, subject: "독서실", color: "#93c5fd" }, // 월요일 21-23시
    { day: 3, start: 21, end: 23, subject: "독서실", color: "#93c5fd" }, // 수요일 21-23시
    { day: 5, start: 21, end: 23, subject: "독서실", color: "#93c5fd" }, // 금요일 21-23시
  ]);
  //@ts-ignore
  const [showModal, setShowModal] = useState(false);

  // 시간표 추가
  //@ts-ignore
  const handleAddSchedule = (newItem) => {
    //@ts-ignore
    setSchedule([...schedule, newItem]);
    setShowModal(false);
  };

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
          <Card className="pt-6  pl-3 pr-3 gap-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                주간 스케줄표
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowModal(true)}
                className="w-8 h-8 p-0 rounded-full"
              ></Button>
            </div>

            <div className="overflow-x-auto max-h-[67vh] overflow-y-auto">
              <div className="min-w-full">
                {/* 헤더 */}
                <div className="grid grid-cols-8 gap-0 border-b border-gray-200">
                  <div className="p-2 text-center text-sm font-medium text-gray-500 bg-gray-50 border-r border-gray-200"></div>
                  {days.map((day) => (
                    <div
                      key={day}
                      className="p-3 text-center text-sm font-medium text-gray-900 bg-gray-50 border-r border-gray-200 last:border-r-0"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* 시간표 본문 */}
                <div className="divide-y divide-gray-100">
                  {hours.map((hour) => (
                    <div
                      key={hour}
                      className="grid grid-cols-8 gap-0 min-h-[40px]"
                    >
                      {/* 시간 셀 */}
                      <div className="p-2 text-center text-sm text-gray-600 bg-gray-50 border-r border-gray-200 flex items-center justify-center">
                        {hour}
                      </div>

                      {/* 요일별 셀 */}
                      {days.map((_, dayIdx) => {
                        const event = schedule.find(
                          (e) =>
                            e.day === dayIdx && hour >= e.start && hour < e.end
                        );

                        return (
                          <div
                            key={dayIdx}
                            className="border-r border-gray-200 last:border-r-0 min-h-[40px] flex items-center justify-center text-xs font-medium relative"
                            style={{
                              backgroundColor: event
                                ? event.color
                                : "transparent",
                            }}
                          >
                            {event && hour === event.start && (
                              <div className="text-center text-gray-800 px-2 py-1 rounded">
                                {event.subject}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      {/**아래 컴포넌트 변경 금지 */}
      <BottomNavBar />
      <div />
    </>
  );
};

// 시간표 추가 모달 컴포넌트
//@ts-ignore
function AddScheduleModal({ onClose, onSave }) {
  const [form, setForm] = useState({
    day: 0,
    start: 8,
    end: 9,
    subject: "",
    color: "#FDE5E5",
  });

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>시간표 추가</h3>
        <div>
          요일:
          <select
            value={form.day}
            onChange={(e) => setForm({ ...form, day: Number(e.target.value) })}
          >
            {days.map((d, i) => (
              <option key={d} value={i}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div>
          시작:
          <input
            type="number"
            min={8}
            max={23}
            value={form.start}
            onChange={(e) =>
              setForm({ ...form, start: Number(e.target.value) })
            }
          />
          종료:
          <input
            type="number"
            min={form.start + 1}
            max={24}
            value={form.end}
            onChange={(e) => setForm({ ...form, end: Number(e.target.value) })}
          />
        </div>
        <div>
          과목명:
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>
        <div>
          색상:
          <input
            type="color"
            value={form.color}
            onChange={(e) => setForm({ ...form, color: e.target.value })}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <button onClick={() => onSave(form)}>저장</button>
          <button onClick={onClose} style={{ marginLeft: 8 }}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default TimetablePage;

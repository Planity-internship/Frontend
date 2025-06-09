import  { useState } from "react";
import "./WeeklyScheduleSection.css";
import { Card } from "@/components/ui/card";

const scheduleData = {
  일: [],
  월: [
    { time: "17:00~18:40", subject: "튼튼 영어학원", status: "출석" },
    { time: "19:30~20:20", subject: "오마이 수학학원", status: "미정" },
    { time: "20:30~23:00", subject: "한샘 독서실", status: "미정" },
  ],
  화: [],
  수: [],
  목: [],
  금: [],
  토: [],
};

const WeeklyScheduleSection = () => {
  const [selectedDay, setSelectedDay] = useState("월");

  return (
    <>
      <Card className="p-3 gap-0">
        <h3 className="font-bold text-lg">주간 스케줄표</h3>
        <div className="day-selector">
          {Object.keys(scheduleData).map((day) => (
            <button
              key={day}
              className={`day-button-text ${
                selectedDay === day ? "selected" : ""
              }`}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="schedule-list">
          {/*@ts-ignore*/}
          {scheduleData[selectedDay].length === 0 ? (
            <p className="empty-text">등록된 수업이 없습니다.</p>
          ) : (
            //@ts-ignore
            scheduleData[selectedDay].map((item, index) => (
              <div key={index} className="schedule-item">
                <div className="schedule-time">{item.time}</div>
                <div className="schedule-subject">{item.subject}</div>
                <div
                  className={`status-badge ${
                    item.status === "출석" ? "present" : "pending"
                  }`}
                >
                  {item.status}
                </div>
              </div>
            ))
          )}
        </div>
      </Card>
    </>
  );
};

export default WeeklyScheduleSection;

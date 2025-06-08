import React, { useState } from "react";
import "./TimetablePage.css";

// 요일과 시간대 정의
const days = ["일", "월", "화", "수", "목", "금", "토"];
const hours = Array.from({ length: 17 }, (_, i) => i + 8); // 8~24시

const TimetablePage = () => {
  const [schedule, setSchedule] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // 시간표 추가
  const handleAddSchedule = (newItem) => {
    setSchedule([...schedule, newItem]);
    setShowModal(false);
  };

  return (
    <div className="page-content"> {/* padding: 0; 적용! */}
      <div className="timetable-header-row">
        <h2 className="timetable-title">시간표</h2>
        <button
          className="header-add-button"
          onClick={() => setShowModal(true)}
          aria-label="시간표 추가"
        >
          ＋
        </button>
        {/* 종 아이콘 이미지 */}
        <img
          src="/images/Icon.png"
          alt="notification"
          className="notification-icon"
        />
      </div>
      <div className="timetable-container">
        <div className="timetable-header">
          <div className="timetable-time-cell"></div>
          {days.map((d) => (
            <div key={d} className="timetable-day-cell">{d}</div>
          ))}
        </div>
        <div className="timetable-body">
          {hours.map((h) => (
            <div key={h} className="timetable-row">
              <div className="timetable-time-cell">{h}</div>
              {days.map((_, dayIdx) => {
                const event = schedule.find(
                  (e) => e.day === dayIdx && h >= e.start && h < e.end
                );
                return (
                  <div
                    key={dayIdx}
                    className="timetable-cell"
                    style={{
                      background: event ? event.color : "transparent",
                      color: event ? "#222" : "#bbb",
                    }}
                  >
                    {event && h === event.start ? event.subject : ""}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <AddScheduleModal
          onClose={() => setShowModal(false)}
          onSave={handleAddSchedule}
        />
      )}
    </div>
  );
};

// 시간표 추가 모달 컴포넌트
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
            onChange={(e) =>
              setForm({ ...form, end: Number(e.target.value) })
            }
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

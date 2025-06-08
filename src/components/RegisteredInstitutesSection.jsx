import './RegisteredInstitutesSection.css';
import React from 'react';

const scheduleData = [
  { name: "튼튼 영어학원", days: "월/수/금", time: "17:00~18:40" },
  { name: "오마이 수학학원", days: "월/목", time: "19:30~20:20" },
  { name: "동의 태권도", days: "화/금", time: "18:00~19:00" },
];

const RegisteredInstitutesSection= () => {
  return (
    <div className="schedule-wrapper">
      <h3>등록학원 정보</h3>
      {scheduleData.map((academy, index) => (
        <div className="schedule-row" key={index}>
          <div className="schedule-academy-name">{academy.name}</div>
          <div className="academy-days">{academy.days}</div>
          <div className="academy-time">{academy.time}</div>
          <div className="phone-icon">📞</div>
        </div>
      ))}
    </div>
  );
};

export default RegisteredInstitutesSection;

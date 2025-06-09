import './RegisteredInstitutesSection.css';
import React, { useState } from 'react';

const scheduleData = [
  { name: "튼튼 영어학원", days: "월/수/금", time: "17:00~18:40", phone: "010-1111-2222" },
  { name: "오마이 수학학원", days: "월/목", time: "19:30~20:20", phone: "010-3333-4444" },
  { name: "동의 태권도", days: "화/금", time: "18:00~19:00", phone: "010-5555-6666" },
];

const RegisteredInstitutesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAcademy, setSelectedAcademy] = useState(null);

  const handlePhoneClick = (academy) => {
    setSelectedAcademy(academy);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAcademy(null);
  };

  return (
    <div className="schedule-wrapper">
      <h3>등록학원 정보</h3>
      {scheduleData.map((academy, index) => (
        <div className="schedule-row" key={index}>
          <div className="schedule-academy-name">{academy.name}</div>
          <div className="academy-days">{academy.days}</div>
          <div className="academy-time">{academy.time}</div>
          <img
            src="/images/Phone call.png"
            alt="전화걸기"
            className="phone-icon"
            onClick={() => handlePhoneClick(academy)}
            tabIndex={0}
            role="button"
            aria-label={`${academy.name} 전화걸기`}
          />
        </div>
      ))}

      {modalOpen && selectedAcademy && (
        <div className="phone-modal-backdrop" onClick={handleCloseModal}>
          <div className="phone-modal" onClick={e => e.stopPropagation()}>
            <div className="phone-modal-row">
              <img
                src="/images/Phone call.png"
                alt="전화 아이콘"
                className="phone-modal-emoji"
              />
              <a
                href={`tel:${selectedAcademy.phone}`}
                className="phone-modal-call-btn-inline"
                onClick={handleCloseModal}
              >
                전화하기
              </a>
              <span className="phone-modal-number-inline">{selectedAcademy.phone}</span>
            </div>
            <button className="phone-modal-cancel-btn-inline" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisteredInstitutesSection;

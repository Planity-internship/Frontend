import { Card } from "@/components/ui/card";
import "./RegisteredInstitutesSection.css";
import  { useState } from "react";

const scheduleData = [
  {
    name: "튼튼 영어학원",
    days: "월/수/금",
    time: "17:00~18:40",
    phone: "010-1111-2222",
  },
  {
    name: "오마이 수학학원",
    days: "월/목",
    time: "19:30~20:20",
    phone: "010-3333-4444",
  },
  {
    name: "동의 태권도",
    days: "화/금",
    time: "18:00~19:00",
    phone: "010-5555-6666",
  },
];

const RegisteredInstitutesSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAcademy, setSelectedAcademy] = useState(null);
  //@ts-ignore
  const handlePhoneClick = (academy) => {
    setSelectedAcademy(academy);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAcademy(null);
  };

  return (
    <>
      <Card className="p-4 gap-0">
        <p className="text-lg font-bold ">등록학원 정보</p>
        {scheduleData.map((academy, index) => (
          <div className="flex pt-3 justify-between" key={index}>
            <div className="text-lg font-bold">{academy.name}</div>
            <div>{academy.days}</div>
            <div>{academy.time}</div>
            <div className="grid justify-items-center">
              <img
                src="/images/Phone call.png"
                className="phone-icon"
                onClick={() => handlePhoneClick(academy)}
                tabIndex={0}
                role="button"
              />
              <p className="text-[0.1em]">통화하기</p>
            </div>
          </div>
        ))}
        {/*추후 모달로 바꿀것*/}
        <div className="p-3">
          {modalOpen && selectedAcademy && (
            <div className="phone-modal-backdrop" onClick={handleCloseModal}>
              <div className="phone-modal" onClick={(e) => e.stopPropagation()}>
                <div className="phone-modal-row">
                  <img
                    src="/images/Phone call.png"
                    alt="전화 아이콘"
                    className="phone-modal-emoji"
                  />
                  <a
                    //@ts-ignore
                    href={`tel:${selectedAcademy.phone}`}
                    className="phone-modal-call-btn-inline"
                    onClick={handleCloseModal}
                  >
                    전화하기
                  </a>
                  <span className="phone-modal-number-inline">
                    {/*@ts-ignore*/}
                    {selectedAcademy.phone}
                  </span>
                </div>
                <button
                  className="phone-modal-cancel-btn-inline"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};

export default RegisteredInstitutesSection;

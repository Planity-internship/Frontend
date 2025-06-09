import './CurrentClassSection.css';

const CurrentClassSection = () => {
  return (
    <div className="current-class-container">
      <div className="class-time-box">
        <p className="class-time">14:00 - 16:00</p>
        <p className="class-status">수업 중</p>
      </div>
      <div className="class-info-box">
        <p className="class-subject">영어</p>
        <p className="class-academy">키움학원</p>
      </div>
    </div>
  );
};

export default CurrentClassSection;

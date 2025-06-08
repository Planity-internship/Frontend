import './HeaderSection.css';

const HeaderSection = () => {
  console.log("✅ HeaderSection 렌더링 중");
  return (
    <div className="header-row">
      <div className="user-profile">
        <img src="/images/account_circle.png" alt="profile" className="profile-icon" />
        <div className="user-info">
          <p className="user-name">신승연</p>
          <p className="user-school">동의고 3학년</p>
        </div>
      </div>
      <img src="/images/Icon.png" alt="notification" className="notification-icon" />
    </div>
  );
};

export default HeaderSection;
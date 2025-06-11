
import "./AccountPage.css";
import BottomNavBar from "@/components/BottomNavBar";


/**
 /**
 * ===========================
 * Account(계정) 관련 API 명세
 * ===========================
 */

// export interface UserInfo {
//   name: string;
//   email: string;
//   keywords: string[];
//   settings: {
//     darkMode: boolean;
//     notifications: boolean;
//     // 기타 설정 필드 추가 가능
//   };
// }

// export interface ChildInfo {
//   name: string;
//   age: number;
//   gender: string;
//   // 기타 아이 정보 필드 추가 가능
// }

// export interface Restriction {
//   reason: string;
//   date: string; // ISO 8601 (예: "2025-06-11T23:30:00Z")
// }

/**
 * [GET] 내 정보 조회
 * @url      /api/user/me
 * @returns  UserInfo
 */

/**
 * [PUT] 내 정보 수정
 * @url      /api/user/me
 * @body     Partial<Pick<UserInfo, "name" | "email">>
 * @returns  UserInfo
 */

/**
 * [POST] 비밀번호 변경
 * @url      /api/user/me/password
 * @body     {
 *   currentPassword: string;
 *   newPassword: string;
 * }
 * @returns  {
 *   message: string;
 * }
 */

/**
 * [GET] 우리 아이 정보 조회
 * @url      /api/user/child
 * @returns  ChildInfo
 */

/**
 * [PUT] 우리 아이 정보 수정
 * @url      /api/user/child
 * @body     Partial<ChildInfo>
 * @returns  ChildInfo
 */

/**
 * [GET] 커뮤니티 이용 제한 내역 조회
 * @url      /api/user/me/restrictions
 * @returns  Restriction[]
 */

/**
 * [PUT] 관심 키워드 수정
 * @url      /api/user/me/keywords
 * @body     {
 *   keywords: string[];
 * }
 * @returns  {
 *   keywords: string[];
 * }
 */

/**
 * [PUT] 앱 설정 저장 (다크모드, 알림 등)
 * @url      /api/user/me/settings
 * @body     Partial<UserInfo["settings"]>
 * @returns  {
 *   settings: UserInfo["settings"];
 * }
 */


const userInfo = {
  name: "귀요미승연맘-^^",
  email: "user@email.com",
};

const AccountPage = () => {
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
        <div className="flex-1 pl-5 pr-5 flex flex-col  overflow-y-auto">
              <div className="account-header-row">
                <h2 className="account-title">계정</h2>
              </div>
              <div className="account-profile-card">
                <div className="profile-info"></div>
              </div>
              <button className="edit-child-btn">
                <span className="edit-child-text">우리 아이 정보 수정하기</span>
                <span className="arrow">{">"}</span>
              </button>
              <div className="account-menu-list">
                <div className="menu-section">
                  <div className="menu-title">아이디</div>
                  <div className="menu-value">{userInfo.name}</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">비밀번호 변경</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">이메일 변경</div>
                  <div className="menu-value">{userInfo.email}</div>
                </div>
                <div className="menu-divider" />
                <div className="menu-label">커뮤니티</div>
                <div className="menu-section">
                  <div className="menu-title">이용 제한 내역</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">관심 키워드 설정</div>
                  <div className="menu-value">공구 / 문제집 나눔</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">커뮤니티 이용규칙</div>
                </div>
                <div className="menu-divider" />
                <div className="menu-label">앱 설정</div>
                <div className="menu-section">
                  <div className="menu-title">다크모드</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">알림 설정</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">암호 잠금</div>
                </div>
                <div className="menu-section">
                  <div className="menu-title">캐시 삭제</div>
                </div>
              </div>
  
        </div>
        {/**아래 컴포넌트 변경 금지 */}
        <BottomNavBar />
        <div />
      </div>
    </>
  );
};

export default AccountPage;

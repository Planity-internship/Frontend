import { Card } from "@/components/ui/card";
import deu_logo from "@/assets/image/deu_logo.png";
function HeaderSection() {
  return (
    <div>

      {/* API 호출
      profile: string // 프로필 이미지 URL (예: "https://.../user123.png")  //지피티
      name: string  // 이름 (예: "신승연")
      school: string  // 학교 이름 (예: "동의고")
      grade: number // 학년 (예: 3)
      school_logo: string // 학교 로고 이미지 URL (예: "https://.../deu_logo.png")  //지피티
      */}

      {/*카드 학생 정보*/}
      <Card className="p-0 pt-1 pb-1">
        <div className="flex gap-x-3 items-center">
          <img
            src="/images/account_circle.png"
            alt="profile"
            className="profile-icon"
          />
          <p className="text-3xl font-extrabold">신승연</p> 
          <img className="h-15" src={deu_logo} alt="" />
          <p className="text-lg text-center font-bold">동의고 <br/>3학년</p>
        </div>
      </Card>
    </div>
  );
}

export default HeaderSection;

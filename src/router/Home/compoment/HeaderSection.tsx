import { Card } from "@/components/ui/card";
import deu_logo from "@/assets/image/deu_logo.png";
function HeaderSection() {
  return (
    <div>
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

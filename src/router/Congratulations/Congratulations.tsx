import logo from "@/assets/image/Planity_only_logo.png";
import { Button } from "@/components/ui/button";

function Congratulations() {
    return (
        <div className="w-screen h-screen flex flex-col items-center px-10 py-35">
            <img src={logo} alt="로고" className="mb-[-8%] object-contain" />
            <div className="text-center font-bold">
                <p className="text-4xl pb-5">모든 설정이</p>
                <p className="text-4xl">완료되었습니다!</p>
                <br />
            </div>
            <p className="pb-5">본격적으로 앱에 한번 들어가 볼까요?</p>
            <Button className="bg-[#F47C66] h-10 w-60 text-md font-bold rounded-lg shadow-md">
                시작하기
            </Button>
        </div>
    );
}

export default Congratulations;

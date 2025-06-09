import logo from "@/assets/image/Planity_logo.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

function Main_layout() {
    const navigate = useNavigate();
    function singup() {
        navigate("/login");
    }

    return (
        <div className="min-h-screen bg-[linear-gradient(to_bottom,_white_0%,_white_55%,_#F9BDB2_80%,_#F47C66_100%)] flex flex-col items-center justify-center px-4">
            <img
                src={logo}
                className="h-[30vh] w-auto mb-40 select-none pointer-events-none"
                alt="Planity 로고"
                draggable={false}
            />
            <Button
                onClick={singup}
                className="bg-[#F47C66] h-12 w-60 text-lg rounded-lg shadow-md"
            >
                시작하기
            </Button>
        </div>
    );
}

export default Main_layout;

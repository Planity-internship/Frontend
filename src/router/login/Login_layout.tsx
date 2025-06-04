import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

function Login_layout() {
    const navigate = useNavigate();
    function signup() {
        navigate("/signup");
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm bg-white  px-8 py-10 flex flex-col items-center">
                <h1 className="text-[#F47C66] text-7xl  mb-10 login_title">
                    Planity
                </h1>
                <form className="w-full flex flex-col gap-2">
                    <div>
                        <Label htmlFor="email" className="block text-base font-semibold mb-1">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F47C66] transition"
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="block text-base font-semibold mb-1">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            className="w-full border border-gray-300  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F47C66] transition"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className="flex flex-col gap-3 mt-6">
                        <Button

                            className="w-full h-10 bg-neutral-900 text-white text-sm rounded-xl shadow-none hover:bg-neutral-700 transition"
                        >
                            로그인
                        </Button>
                        <Button
                            type="button"
                            onClick={signup}
                            className="w-full h-10 bg-[#F47C66] text-white text-sm rounded-xl shadow-none hover:bg-[#e26e57] transition"
                        >
                            회원가입
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login_layout;

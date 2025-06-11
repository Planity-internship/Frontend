import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom"; // ← 수정됨: 정확한 라우터 import

function Login_layout() {
  const navigate = useNavigate();

  // 회원가입 페이지로 이동
  function signup() {
    navigate("/signup");
  }

  // 로그인 성공 시 메인 페이지로 이동
  function login() {
    // 여기에 실제 로그인 처리 로직을 추가할 수 있어요
    // 예: 이메일, 비밀번호 유효성 검사, API 호출 등

    localStorage.setItem("token", "abc123"); // 로그인 상태 저장 (예시)
    navigate("/home"); // 로그인 후 이동할 페이지 경로
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-sm bg-white px-8 py-10 flex flex-col items-center">
        <h1 className="text-[#F47C66] text-7xl mb-10 login_title">Planity</h1>
        <form className="w-full flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
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
              className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F47C66] transition"
              autoComplete="current-password"
            />
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <Button
              type="button"
              onClick={login}
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

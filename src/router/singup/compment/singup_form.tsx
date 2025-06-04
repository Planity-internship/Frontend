import React, { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

interface SignupFormValues {
    email: string;
    password: string;
    name: string;
    phone: string;
}

// 필요한 작업
// 1. 중복일때 알림뜨게 해서 알려주기

const SignupForm: React.FC = () => {
    const navigate = useNavigate();
    function Successes() {
        navigate("/congratulations");
    }

    const [agreePersonal, setAgreePersonal] = useState(false); // 필수
    const [agreeMarketing, setAgreeMarketing] = useState(false); // 선택
    const [agreeAll, setAgreeAll] = useState(false);
    const [personalError, setPersonalError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignupFormValues>();

    // 전체 동의 체크박스 동기화
    useEffect(() => {
        setAgreeAll(agreePersonal && agreeMarketing);
    }, [agreePersonal, agreeMarketing]);

    // 전체 동의 클릭 시
    const handleAllAgree = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setAgreeAll(checked);
        setAgreePersonal(checked);
        setAgreeMarketing(checked);
    };

    // 제출 핸들러
    const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
        if (!agreePersonal) {
            setPersonalError("필수 약관에 동의해야 회원가입이 가능합니다.");
            return;
        }
        setPersonalError(null);
        // 회원가입 처리
        alert(JSON.stringify({ ...data, agreePersonal, agreeMarketing }, null, 2));
        //페이지 이동
        Successes();
        //초기화 
        reset();
        setAgreeAll(false);
        setAgreePersonal(false);
        setAgreeMarketing(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            {/* 이메일 */}
            <div>
                <Label className="text-sm font-bold">이메일</Label>
                <Input
                    placeholder="example@example.com"
                    type="email"
                    {...register("email", {
                        required: "이메일을 입력하세요.",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "유효한 이메일 주소를 입력하세요.",
                        },
                    })}
                    className="
                        border-0 border-b-2 border-gray-400
                        focus:border-gray-600 rounded-none shadow-none px-0
                        font-semibold text-gray-600 placeholder:text-gray-400
                        focus:outline-none
                    "
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>
            {/* 비밀번호 */}
            <div>
                <Label className="text-sm font-bold">비밀번호</Label>
                <Input
                    placeholder="대소문자 8자리 이상"
                    type="password"
                    {...register("password", {
                        required: "비밀번호를 입력하세요.",
                        minLength: {
                            value: 6,
                            message: "비밀번호는 6자 이상이어야 합니다.",
                        },
                    })}
                    className="
                        border-0 border-b-2 border-gray-400
                        focus:border-gray-600 rounded-none shadow-none px-0
                        font-semibold text-gray-600 placeholder:text-gray-400
                        focus:outline-none
                    "
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
            </div>
            {/* 이름 */}
            <div>
                <Label className="text-sm font-bold">이름</Label>
                <Input
                    type="text"
                    placeholder="한글로 입력해주세요."
                    {...register("name", { required: "이름을 입력하세요." })}
                    className="
                        border-0 border-b-2 border-gray-400
                        focus:border-gray-600 rounded-none shadow-none px-0
                        font-semibold text-gray-600 placeholder:text-gray-400
                        focus:outline-none
                    "
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
            </div>
            {/* 전화번호 */}
            <div>
                <Label className="text-sm font-bold">전화번호</Label>
                <Input
                    type="tel"
                    placeholder="휴대폰 번호는 - 없이 입력해주세요."
                    {...register("phone", {
                        required: "전화번호를 입력하세요.",
                        pattern: {
                            value: /^01[016789]-?\d{3,4}-?\d{4}$/,
                            message: "유효한 전화번호를 입력하세요.",
                        },
                    })}
                    className="
                        border-0 border-b-2 border-gray-400
                        focus:border-gray-600 rounded-none shadow-none px-0
                        font-semibold text-gray-600 placeholder:text-gray-400
                        focus:outline-none
                    "
                />
                {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>
            {/* 동의 체크박스 */}
            <div className="space-y-3">
                <label className="flex items-center gap-2 font-medium cursor-pointer">
                    <input
                        type="checkbox"
                        checked={agreeAll}
                        onChange={handleAllAgree}
                        className="accent-gray-600 w-5 h-5"
                    />
                    전체 동의
                </label>
                <div className="pl-6 space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={agreePersonal}
                            onChange={e => setAgreePersonal(e.target.checked)}
                            className="accent-gray-600 w-4 h-4"
                        />
                        개인정보 처리방침 동의 <span className="text-red-500">(필수)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={agreeMarketing}
                            onChange={e => setAgreeMarketing(e.target.checked)}
                            className="accent-gray-600 w-4 h-4"
                        />
                        광고성 마케팅 정보 수신 동의 <span className="text-gray-400">(선택)</span>
                    </label>
                </div>
                {personalError && (
                    <div className="text-red-500 text-sm pl-6">{personalError}</div>
                )}
            </div>
            {/* 제출 버튼 */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-10 bg-[#F47C66] text-white text-sm rounded-xl shadow-none hover:bg-[#e26e57] transition"
            >
                회원가입
            </button>
        </form>
    );
};

export default SignupForm;

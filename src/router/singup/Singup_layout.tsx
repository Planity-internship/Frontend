import SignupForm from "./compment/singup_form";


function Singup_layout() {
    return (
        <>
            <div className="grid w-screen h-screen  px-10">
                <div className="py-40">
                    {/*Text*/}
                    <p className="text-5xl font-bold pb-3">회원가입</p>
                    <p className="text-sm font-bold pb-6">환영합니다!<br />회원가입을 위해 필수사항을 입력해주세요.</p>
                    {/*입력 필드 컴포넌트*/}
                    <SignupForm />
                </div>

            </div>
        </>

    );
}
export default Singup_layout;

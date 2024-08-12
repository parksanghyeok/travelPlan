"use client";
import { useState } from "react";
import Link from "next/link";
import TextDefaultInput from "components/input/textDefaultInput";
import { validateEmail } from "utils/dataFormat";
import { EmailLoginErrorMessageType, EmailUserData } from "types";
import { useEmailUserLoginMutation } from "../../../hooks/mutation/inedx";

export default function Login() {
  const [loginInfo, setLoginInfo] = useState<EmailUserData>({id: "", pw: ""});
  const [loginErrorMessages, setMessage] = useState<EmailLoginErrorMessageType>({idError: "", pwError: ""});
  const loginAction = useEmailUserLoginMutation();

  const activeLogin = (e) => {
    e.preventDefault();
    loginAction.mutate(loginInfo);
  };

  return (
    <div className="w-full md:w-1/2 h-full p-8 bg-white rounded-lg shadow-md">
      <form className="flex flex-col gap-4" onSubmit={activeLogin}>
        {/* 이메일 입력 */}
        <TextDefaultInput
          value={ loginInfo.id }
          changeEvent={(e) => {
            setLoginInfo({ ...loginInfo, id: e.target.value });
            setMessage({...loginErrorMessages, idError: validateEmail(e.target.value)});
          }}
          labelName="이메일"
          placeholder="이메일을 입력해주세요."
          errorMessage={ loginErrorMessages.idError }
          isRequired={true}
        />
        {/* 비밀번호 입력 */}
        <TextDefaultInput
          type={"password"}
          value={ loginInfo.pw }
          changeEvent={(e) => {setLoginInfo({ ...loginInfo, pw: e.target.value })}}
          labelName="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          isRequired={true}
        />
        <div className="flex gap-4">
          <Link className="w-full py-[10px] px-[8px] bg-[#CCC] text-center rounded-md hover:bg-white duration-300 shadow-md" href="/auth/sign">회원가입</Link>
          <button
            className="w-full py-[10px] px-[8px] text-white bg-blue-500 border rounded-md"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};


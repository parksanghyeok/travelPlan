import React, { useState } from "react";
import AuthInput from "../../components/form/authInput";
import { AuthLoginType } from "../../types";
import { useRouter } from "next/router";
import { userLogin } from "../../api";
import { useSetRecoilState } from "recoil";
import { userData } from "../../atom";
import { SaveLoginSession } from "../../utils/dataFormat";

const Login = () => {
  const router = useRouter();
  const setUserData = useSetRecoilState(userData);
  const [loginData, setLoginData] = useState<AuthLoginType>({ email: '', password: '' });

  const aaa = () => {
    userLogin(loginData).then((res) => {
      SaveLoginSession(res);
      setUserData(res);
      router.reload();
    });
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-[20px] w-[50%] min-h-[50%] bg-[#fff] rounded-lg shadow-shadow021">
        <img
          src={'../image_logo2.png'}
          className="w-[250px] h-[250px]"
        />
        <AuthInput
          label={'아이디'}
          type={'text'}
          placeholder={'아이디를 입력해주세요.'}
          value={loginData.email}
          onChange={(e) => setLoginData({...loginData, email: e.target.value})}
        />
        <AuthInput
          label={'비밀번호'}
          type={'password'}
          placeholder={'비밀번호를 입력해주세요.'}
          value={loginData.password}
          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
        />
        <button
          className="w-[80%] h-[42px] p-[8xp] mb-[10px] text-[16px] text-white font-bold bg-blue1 rounded-full"
          onClick={() => aaa()}
        >로그인</button>
        <button
          className="w-[80%] h-[42px] p-[8xp] text-[16px] font-bold border border-black1 rounded-full"
          onClick={() => router.push('/auth/join')}
        >회원가입</button>
      </div>
    </div>
  )
};

export default Login;
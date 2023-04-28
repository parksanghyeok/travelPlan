import React, { useState } from "react";
import { AuthJoinType } from "../../types";
import AuthInput from "../../components/form/authInput";
import { userJoin } from "../../api";
import { useRouter } from "next/router";
import { SaveLoginSession } from "../../utils/dataFormat";
import { useSetRecoilState } from "recoil";
import { userData } from "../../atom";

const Join = () => {
  const router = useRouter();
  const setUserData = useSetRecoilState(userData);
  const [joinData, setJoinData] = useState<AuthJoinType>({ email: '', password: '', name: '' });

  const joinComplete = () => {
    userJoin(joinData).then((res: any) => {
      SaveLoginSession(res);
      // setUserData(res);
      router.push('/');
    });
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center p-[20px] w-[50%] min-h-[50%] bg-[#fff] rounded-lg shadow-shadow021">
        <h3>회원가입</h3>
        <AuthInput
          label={'아이디'}
          type={'text'}
          placeholder={'아이디를 입력해주세요.'}
          value={joinData.name}
          onChange={(e) => setJoinData({...joinData, name: e.target.value})}
        />
        <AuthInput
          label={'아이디'}
          type={'text'}
          placeholder={'아이디를 입력해주세요.'}
          value={joinData.email}
          onChange={(e) => setJoinData({...joinData, email: e.target.value})}
        />
        <AuthInput
          label={'비밀번호'}
          type={'password'}
          placeholder={'비밀번호를 입력해주세요.'}
          value={joinData.password}
          onChange={(e) => setJoinData({...joinData, password: e.target.value})}
        />
        <button
          className="w-[80%] h-[42px] p-[8xp] mb-[10px] text-[16px] text-white font-bold bg-blue1 rounded-full"
          onClick={() => joinComplete()}
        >회원가입</button>
      </div>
    </div>
  )
};

export default Join;
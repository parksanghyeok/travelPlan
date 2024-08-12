"use client";
import { useEffect, useMemo, useState } from "react";
import TextDefaultInput from "components/input/textDefaultInput";
import { CreateUserData, SignValidateMessageType } from "types";
import { emailJoinApi } from "api";
import { validateEmail, validateName, validatePassword } from "utils/dataFormat";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [btnDisable, setBtnDisable] = useState(true);
  const [signInfo, setSignInfo]: CreateUserData = useState({id: "", pw: "", name: ""});
  const [signValidateMessage, setMessage]: SignValidateMessageType = useState({idError: "", pwError: "", nameError: ""});

  // 회원가입 완료 액션
  const signUp = (e) => {
    e.preventDefault();
    const res = emailJoinApi(signInfo);
    router.push("/main");
  };

  // 필수 값 입력과 정확히 입력한건지 확인 후 버튼 활성화
  const checkFormValidation = () => {
    // 필수 입력값이 모두 입력 되었는지 확인
    const isInfo = Object.values(signInfo).filter(v => v === "").length <= 0;
    // 정확한 값으로 입력했는지 확인
    const noError = Object.values(signValidateMessage).filter(v => v !== "") <= 0;

    setBtnDisable(!(isInfo && noError));
  };

  useEffect(() => {
    checkFormValidation();
  }, [signValidateMessage]);

  // const memo = useMemo(() => {
  //   return checkFormValidation();
  // }, [signValidateMessage]);

  return (
    <div className="max-w-[580px] w-1/2 h-full p-8 bg-white rounded-lg shadow-md">
      <form className="flex flex-col gap-4" onSubmit={signUp}>
        {/* 이름 입력 */}
        <TextDefaultInput
          value={ signInfo.name }
          changeEvent={(e) => {
            setSignInfo({ ...signInfo, name: e.target.value });
            setMessage({...signValidateMessage, nameError: validateName(e.target.value)});
          }}
          labelName="이름"
          placeholder="이름을 입력해주세요."
          infoMessage={"* 1~10자리의 이름을 입력해주세요."}
          errorMessage={ signValidateMessage.nameError }
          isRequired={true}
        />
        {/* 이메일 입력 */}
        <TextDefaultInput
          value={ signInfo.id }
          changeEvent={(e) => {
            setSignInfo({ ...signInfo, id: e.target.value });
            setMessage({...signValidateMessage, idError: validateEmail(e.target.value)});
          }}
          labelName="이메일"
          placeholder="이메일을 입력해주세요."
          errorMessage={ signValidateMessage.idError }
          isRequired={true}
        />
        {/* 비밀번호 입력 */}
        <TextDefaultInput
          type="password"
          value={ signInfo.pw }
          changeEvent={(e) => {
            setSignInfo({ ...signInfo, pw: e.target.value });
            setMessage({...signValidateMessage, pwError: validatePassword(e.target.value)});
          }}
          labelName="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          infoMessage={"* 영문, 숫자, 특수문자로 이루어진 8~15자리 번호를 입력해주세요."}
          errorMessage={ signValidateMessage.pwError }
          isRequired={true}
        />
        <div className="flex gap-4">
          <button
            className={`w-full py-[10px] px-[8px] text-white border rounded-md ${ btnDisable ? "bg-[#c3c3c3] cursor-not-allowed" : "bg-blue-500" }`}
            disabled={ btnDisable }
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};
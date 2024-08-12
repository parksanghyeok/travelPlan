import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { emailJoinApi, emailLoginAPI } from "../../api";
import { EmailUserData } from "../../types";

/** Email 회원가입 mutation **/
export const useEmailUserJoinMutation = () => {
  /**
   * To Do
   * 1. 화원 가입 성공시 유저 데이터 저장 (Recoil or Section)
   * 2. Error 메세지 Alert 제공
   * **/
  const router = useRouter();
  const data = useMutation({
    mutationFn: (params: any) => emailJoinApi(params),
    onSuccess(data) {
      router.push("/main");
    },
    onError(error) {
      console.log(error);
    }
  });

  return data;
}

/** Email 로그인 mutation **/
export const useEmailUserLoginMutation = () => {
  /**
   * To Do
   * 1. 로그인 성공 데이터 저장 (Recoil or Section)
   * 2. Error 메세지 Alert 제공
   * 3. main으로 이동이 아닌 현재 페이지 그대로 유지 (Header에 로그인 버튼 추가 및 팝업으로 수정 예정)
   * **/
  const router = useRouter();
  const data = useMutation({
    mutationFn: (params: EmailUserData) => emailLoginAPI(params),
    onSuccess(data) {
      router.push("/main");
    },
    onError(error) {
      console.log(error);
    }
  });

  return data;
}
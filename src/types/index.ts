export interface EmailUserData {
  id: string;
  pw: string;
}

// 로그인 화면 에러 메세지 타입
export interface EmailLoginErrorMessageType {
  idError: string;
  pwError: string;
}

// 회원가입 화면 에러 메세지 타입
export interface SignValidateMessageType {
  idError: string;
  pwError: string;
  nameError: string;
}

export interface CreateUserData {
  id: string;
  pw: string;
  name: string;
}
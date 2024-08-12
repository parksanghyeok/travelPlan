// 이메일 형식 확인
export const validateEmail = (email: string) => {
  const email_reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  if (!email) {
    return "이메일을 입력해주세요.";
  } else if (!email_reg.test(email)) {
    return "잘못된 메일 형식입니다."
  } else {
    return "";
  }
};

// 비밀번호 형식 확인
export const validatePassword = (pw: string) => {
  const pw_reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

  if (!pw) {
    return "비밀번호를 입력해주세요.";
  } else if (!pw_reg.test(pw)) {
    return "잘못된 형식의 비밀번호 입니다.";
  } else {
    return "";
  }
};

// 이름 형식 확인
export const validateName = (name: string) => {
  const name_reg = /^[a-zA-Z가-힇0-9]{1,10}$/;

  if (!name) {
    return "이름을 입력해주세요.";
  } else if (!name_reg.test(name)) {
    return "10자리가 넘는 이름입니다.";
  } else {
    return "";
  }
};

/** 로그인 오류 코드 **/
export const loginErrorMessage = (code: string) => {
  switch (code) {
    case "auth/user-not-found" || "auth/wrong-password":
      return "이메일 혹은 비밀번호가 일치하지 않습니다.";
    case "auth/email-already-in-use":
      return "이미 사용 중인 이메일입니다.";
    case "auth/weak-password":
      return "비밀번호는 6글자 이상이어야 합니다.";
    case "auth/network-request-failed":
      return "네트워크 연결에 실패 하였습니다.";
    case "auth/invalid-email":
      return "잘못된 이메일 형식입니다.";
    case "auth/internal-error":
      return "잘못된 요청입니다.";
    default:
      return "로그인에 실패 하였습니다.";
  }
};
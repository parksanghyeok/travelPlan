import axios from "axios";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "@firebase/auth";
import { auth, database } from "../firebase";
import { AuthJoinType } from "../types";
import { JoinErrorCode } from "../utils/dataFormat";
import { set, ref } from "@firebase/database";

// Firebase 로그인
export const userLogin = async (params: any) => {
  const user = await signInWithEmailAndPassword(
    auth, params.email, params.password
  )
  .then((res: any) => {
    return res.user;
  })
  .catch((e) => {
    return JoinErrorCode(e.code);
  });
  return user;
};

// Firebase 로그아웃
export const userLogout = async () => {
  const data = await signOut(auth);
};

// Firebase 회원가입
export const userJoin = async (params: AuthJoinType) => {
  const data = await createUserWithEmailAndPassword(
    auth,
    params.email, params.password
  ).then((res: any) => {
    updateProfile(res.user, {...res.user, displayName: params.name});
    return userLogin(params);
  })
  .catch((e) => {
    return JoinErrorCode(e.code);
  });
  return data;
};

// 유저 기본 정보 DB에 추가
export const setUserData = (data: AuthJoinType, uid: string) => {
  set(ref(database, 'users/' + uid), {
    email: data.email,
    name: data.name
  });
};
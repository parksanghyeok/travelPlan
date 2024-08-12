/** ----- Auth API ----- **/
import { fireAuth, fireDB } from "../firebase";
import { CreateUserData, EmailUserData } from "../types";

/** 이메일 계정 유저 등록 **/
export const emailJoinApi = async (data: CreateUserData) => {
  const { user } = await fireAuth.createUserWithEmailAndPassword(data.id, data.pw);
  const u = fireAuth.currentUser;
  await u?.updateProfile({ displayName: data.name });
  return user;
};

/** 이메일 계정 로그인 **/
export const emailLoginAPI = async (params: EmailUserData) => {
  const res = await fireAuth.signInWithEmailAndPassword(params.id, params.pw);

  return res;
};

/** 로그아웃 **/
export const firebaseLogOut = async () => {
  const res = await fireAuth.signOut();
  console.log(res);
  return res;
};

/** 신규 유저 등록시 유저 정보 DB추가 **/
export const createDB = () => {
  fireDB.collection("users").doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA"
  });
};
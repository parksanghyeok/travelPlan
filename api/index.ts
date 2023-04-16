import axios from "axios";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../firebase";

export const userJoin = async (data: any) => {
  try {
    const join = createUserWithEmailAndPassword(
      auth,
      data.email, data.password
    );
    console.log(join);
  } catch (e) {
    console.log('fail');
  }
};
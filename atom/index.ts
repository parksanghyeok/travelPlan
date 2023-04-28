import { atom } from "recoil";

export const userData = atom<any>({
  key: 'userData',
  default: ''
});
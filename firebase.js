import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCxWjwH816fmgMHlN_xy7CGRyNWz7Zz_eo",
	authDomain: "travle-plan-6a10c.firebaseapp.com",
	projectId: "travle-plan-6a10c",
	storageBucket: "travle-plan-6a10c.appspot.com",
	messagingSenderId: "674037514583",
	appId: "1:674037514583:web:954948d6eb25ee8eb9fe12",
	measurementId: "G-P7M2ZXQR4K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
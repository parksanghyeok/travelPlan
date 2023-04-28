import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyCxWjwH816fmgMHlN_xy7CGRyNWz7Zz_eo",
	authDomain: "travle-plan-6a10c.firebaseapp.com",
	projectId: "travle-plan-6a10c",
	storageBucket: "travle-plan-6a10c.appspot.com",
	messagingSenderId: "674037514583",
	appId: "1:674037514583:web:954948d6eb25ee8eb9fe12",
	measurementId: "G-P7M2ZXQR4K",
	databaseURL: "https://travle-plan-6a10c-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase();
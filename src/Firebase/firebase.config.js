import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBbBWsmeiyNgeSShGCws3K2drxhBhf76jg",
    authDomain: "education-system-ca423.firebaseapp.com",
    projectId: "education-system-ca423",
    storageBucket: "education-system-ca423.appspot.com",
    messagingSenderId: "337021768737",
    appId: "1:337021768737:web:bcfb1f298abc75c852ff60"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
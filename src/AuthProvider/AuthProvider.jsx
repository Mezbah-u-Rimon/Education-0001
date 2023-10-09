import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);


    // google provider
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    //github provider
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    //create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //update profile
    const profileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        })
    }

    // Auth change observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    console.log(user);
    const userInfo = {
        createUser,
        signIn,
        logOut,
        user,
        loading,
        profileUpdate,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AuthProvider;
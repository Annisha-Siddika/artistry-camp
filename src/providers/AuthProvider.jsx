import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth= getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
        
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
        displayName: name , photoURL: photo
      })
    }
// observer user auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        });
// stop observing while unmounting
        return () =>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        updateUserProfile,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
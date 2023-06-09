import { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup} from 'firebase/auth';
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth= getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
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
    const facebookSignIn = () =>{
        return signInWithPopup(auth, facebookProvider);
        
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
        setLoading,
        createUser,
        signIn,
        googleSignIn,
        facebookSignIn,
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
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // TODO: send verification email

  // TODO: send password reset email
  // create user using email and password
  const createUserUsingEmailPassword = async (email, password) => {
    setAuthLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = async (name, photo) => {
    setAuthLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // authentication using email and password
  const authenticationUsingEmailPassword = async (email, password) => {
    setAuthLoading(true);
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // authentication using google
  const authenticationUsingGoogle = async () => {
    setAuthLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOutUser = async () => {
    setAuthLoading(true);
    return await signOut(auth);
  };

  // authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // get and set token
        axios.post("http://localhost:5000/jwt", { email: currentUser.email }).then((data) => {
          localStorage.setItem("access-token", data.data.token);
          setAuthLoading(false);
        });
      } else {
        setUser(currentUser);
        setAuthLoading(false);
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUserUsingEmailPassword,
    authenticationUsingEmailPassword,
    user,
    authLoading,
    setAuthLoading,
    logOutUser,
    updateUserProfile,
    authenticationUsingGoogle,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

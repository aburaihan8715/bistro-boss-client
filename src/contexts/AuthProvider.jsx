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
// import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // TODO: send verification email

  // TODO: send password reset email
  // create user using email and password
  const createUserUsingEmailPassword = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    setAuthLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // authentication using email and password
  const authenticationUsingEmailPassword = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // authentication using google
  const authenticationUsingGoogle = () => {
    setAuthLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  // authentication state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthLoading(false);
      setUser(currentUser);
      console.log(currentUser);
      // get and set token
      // if (currentUser) {
      //   axios.post("http://localhost:5000/jwt", { email: currentUser.email }).then((data) => {
      //     // console.log(data);
      //     localStorage.setItem("access-token", data.data.token);
      //     setLoading(false);
      //   });
      // } else {
      //   localStorage.removeItem("access-token");
      // }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    createUserUsingEmailPassword,
    authenticationUsingEmailPassword,
    user,
    authLoading,
    setAuthLoading,
    authError,
    setAuthError,
    logOutUser,
    updateUserProfile,
    authenticationUsingGoogle,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

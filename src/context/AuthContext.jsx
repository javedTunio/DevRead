import React, { createContext, useState, useEffect } from "react";
import { auth } from "@/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null // Load user from localStorage if available
  );
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Monitor the user's authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Save user to state and localStorage when authenticated
        setCurrentUser(user);
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        // Clear localStorage when logged out
        setCurrentUser(null);
        localStorage.removeItem("currentUser");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign up user
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate to home on successful signup
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  // Log in user
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // Navigate to home on successful login
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Log out user
  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);
      localStorage.removeItem("currentUser"); // Clear the stored user on logout
      navigate("/"); // Navigate to home on logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

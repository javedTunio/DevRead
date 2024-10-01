// src/contexts/DataContext.js

import React, { useState, createContext } from "react";
import { db } from "@/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

// Create a new context
const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to add a new user document to Firestore
  const addUser = async (userId, data) => {
    try {
      await addDoc(collection(db, "users"), { userId, ...data });
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  // Function to get user data based on ID
  const getUserData = async (userId) => {
    try {
      const q = query(collection(db, "users"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const userDataArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserData(userDataArray);
    } catch (error) {
      console.error("Error getting user data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DataContext.Provider value={{ addUser, getUserData, userData, loading }}>
      {children}
    </DataContext.Provider>
  );
};

// Export the context itself
export default DataContext;

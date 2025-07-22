import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase config
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize the app only once
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Functions to get Firestore and Storage safely (only in browser)
export const getDB = () => {
  if (typeof window === "undefined") return null;
  return getFirestore(app);
};

export const getStorageInstance = () => {
  if (typeof window === "undefined") return null;
  return getStorage(app);
};

export { app };

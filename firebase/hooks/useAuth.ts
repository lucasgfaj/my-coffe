import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { doc, getFirestore, setDoc } from "firebase/firestore";

import useFirebase from "./useFirebase";

/**
 * Firebase authentication hook.
 * @returns Access to main auth service using email and password strategy, plus user object and loading state flag.
 */
export default function useAuth() {
  const { auth } = useFirebase();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const firestore = getFirestore();

  /**
   * Wrapper for login users with loading state flag for conditional renders.
   * @param email An active user registered in your firebase project.
   * @param password User's password.
   */
  const login = async (email: string, password: string) => {
    if (!auth) throw new Error("Auth not initialized in FirebaseContextProvider!");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Wrapper for logout users.
   */
  const logout = async () => {
    if (!auth) throw new Error("Auth not initialized in FirebaseContextProvider!");
    await signOut(auth);
  };

  /**
   * Wrapper for creating new Users with name, updating profile and saving Firestore document.
   * @param email user email
   * @param password user password (min 6 chars)
   * @param name user display name
   */
  const registerUser = async (email: string, password: string, name: string) => {
    if (!auth) throw new Error("Auth not initialized in FirebaseContextProvider!");

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      // Atualiza o nome no perfil do usuário
      await updateProfile(newUser, { displayName: name });

      // Cria o documento no Firestore
      const userDocRef = doc(firestore, "users", newUser.uid);
      await setDoc(userDocRef, {
        name,
        email,
        createdAt: new Date(),
      });

      setUser(newUser);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (auth) {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [auth]);

  return { loading, user, login, logout, registerUser };
}

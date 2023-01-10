import { updateCurrentUser } from "firebase/auth";
import React, { useState } from "react";
import { useRouter} from "next/router";
import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "../components/private";

export default function Dashboard() {
  const [err, setErr] = useState('');
  const { currentUser, logout } = useAuth();
  const router = useRouter()

  async function handleLogout() {
    setErr("");

    try {
      console.log('Im here line 15')
      await logout();
      console.log('Im here line 17')
      router.push("/login");
    } catch {
        setErr('failed to log out')
    }
  }
  
  return (
    <ProtectedRoute>
        <h1>Dashboard</h1>
      {err && <h2>{err}</h2>}
      <h3>
        Profile<strong>Email: {currentUser.email}</strong>
      </h3>
      <button onClick={handleLogout}>Log Out</button>
    </ProtectedRoute>  
  );
}

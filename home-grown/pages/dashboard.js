import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const [err, setErr] = useState("");
  const { currentUser, logout, isUserAuthenticated } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    setErr("");

    try {
      console.log("Im here line 15");
      await logout();
      console.log("Im here line 17");
      router.push("/login");
    } catch {
      setErr("failed to log out");
    }
  }

  if (!currentUser) {
    router.push("/login");
    return null;
  }
  console.log(currentUser, "here");

  return (
    <div>
      <h1>Dashboard</h1>
      {err && <h2>{err}</h2>}
      <h3>
        Profile<strong>Email: {currentUser.email}</strong>
      </h3>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

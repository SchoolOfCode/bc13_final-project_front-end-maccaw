import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
const router = useRouter();
const { currentUser } = useAuth();

useEffect(() => {
  if (!currentUser.uid) {
    router.push("/login");
  }
}, [router, currentUser]);
return <div>{currentUser ? children : null}</div>;
};

export default ProtectedRoute;
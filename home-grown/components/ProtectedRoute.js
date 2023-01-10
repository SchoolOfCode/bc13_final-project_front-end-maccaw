import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const { currentUser, user } = useAuth();
  // console.log(currentUser, "protected route");
  if (!currentUser) {
    router.push("/login");
  } else {
    return <div>{children}</div>;
  }
};

export default ProtectedRoute;

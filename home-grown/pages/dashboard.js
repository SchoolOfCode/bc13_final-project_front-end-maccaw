import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import { Title } from "../components/Dashboard/Title";

export default function Dashboard() {
  const [err, setErr] = useState("");
  const { currentUser, logout, isUserAuthenticated } = useAuth();
  const router = useRouter();
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getData()
  },[]);


  async function getData(){
    const response = await fetch( "http://localhost:3000/api/staticdata_all_tables_joined")
    const data = await response.json()
    console.log("DATA", data)
    console.log("CURRENT USER",currentUser)

    let user = data.filter(element => element.firebase_id === currentUser.uid)
    setUserData(user)
    setIsLoading(false)
  }


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

  if(isLoading){
    return <div>Loading...</div>
  }
  else{
    return (
      <div>
        <Title userData={userData} />
        {/* <button onClick={handleLogout}>Log Out</button> */}
        
      </div>
    );
  }

}

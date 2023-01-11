import { useAuth } from "../context/AuthContext";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { currentUser } = useAuth();
  if(!currentUser){
    return <div>...Loading</div>
  }
  return (
    <div>
      <h1>Hello World</h1>
      <p>{currentUser.email}</p>
    </div>
  );
}

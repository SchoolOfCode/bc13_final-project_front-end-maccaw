import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { useAuth } from "../../context/AuthContext";
import logo from "../../public/icons/logo.png"


export default function NavBar() {
  const router = useRouter();
  const { currentUser, logout } = useAuth();
  function reloadPage() {
    router.push("/");
  }

  const [active, setActive] = useState(false);

  function burgerHandler() {
    setActive(!active);
  }


  function logOut(){
    setActive(!active);
    logout()
  }

  if (currentUser) {
    return (
      <nav className="navbar">
        <img onClick={reloadPage} className="logo" src="icons/logo.png"/>
        <ul
          className={
            active ? "list-container active" : "list-container notactive"
          }
        >
          <Link href="/" className="text" onClick={burgerHandler}>
            <li>Home</li>
          </Link>
          <Link href="/listings" className="text" onClick={burgerHandler}>
            <li>Listings</li>
          </Link>
          <Link href="/blog" className="text" onClick={burgerHandler}>
            <li>Blog</li>
          </Link>
          <Link href="/login" className="text" onClick={logOut}>
            <li>Log Out</li>
          </Link>
          <Link href="/post" className="text" onClick={burgerHandler}>
            <li>Post</li>
          </Link>
          <Link href="/dashboard" className="text" onClick={burgerHandler}>
            <li>Dashboard</li>
          </Link>
        </ul>

        <div
          onClick={burgerHandler}
          className={active ? "hamburger active" : "hamburger notactive"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
    

        <img onClick={reloadPage} className="logo" src="icons/logo.png"/>
  
        <ul
          className={
            active ? "list-container active" : "list-container notactive"
          }
        >
          <Link href="/" className="text" onClick={burgerHandler}>
            <li>Home</li>
          </Link>
          <Link href="/listings" className="text" onClick={burgerHandler}>
            <li>Listings</li>
          </Link>
          <Link href="/blog" className="text" onClick={burgerHandler}>
            <li>Blog</li>
          </Link>
          <Link href="/signup" className="text" onClick={burgerHandler}>
            <li>Register</li>
          </Link>
          <Link href="/login" className="text" onClick={burgerHandler}>
            <li>Log In</li>
          </Link>
        
          <Link href="/dashboard" className="text" onClick={burgerHandler}>
            <li>Dashboard</li>
          </Link>
        </ul>

        <div
          onClick={burgerHandler}
          className={active ? "hamburger active" : "hamburger notactive"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    );
  }
}

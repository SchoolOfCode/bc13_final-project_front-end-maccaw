import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";

export default function NavBar() {
  const router = useRouter();

  function reloadPage() {
    router.push("/");
  }

  const [active, setActive] = useState(false)

  function burgerHandler(){
    setActive(!active)
  }

  return (
    <nav className="navbar">
      <div className="logo">
     
      </div>
      <ul className={active ? "list-container active"  : "list-container notactive"}>
        <Link href="/" className="text">
          <li>Home</li>
        </Link>
        <Link href="/listings" className="text" >
          <li>Listings</li>
        </Link>
        <Link href="/signup" className="text">
          <li>Register</li>
        </Link>
        <Link href="/login" className="text">
          <li>Log In</li>
        </Link>
        <Link href="/login" className="text">
          <li>Post</li>
        </Link>
        <Link href="/dashboard" className="text">
          <li>Dashboard</li>
        </Link>
      </ul>

      <div onClick={burgerHandler} className={active ? "hamburger active":"hamburger notactive"}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>


    </nav>




  );
}

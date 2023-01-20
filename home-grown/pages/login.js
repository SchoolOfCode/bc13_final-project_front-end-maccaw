import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErr("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      router.push("/dashboard");
    } catch {
      setErr("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div className={styles["log-in-container"]}>
      <div className={styles["glass-container"]}>
        <div className={styles["log-in-card"]}>
          <h1 className={styles.title}>Log In</h1>
          {err && <h2>{err}</h2>}
          <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <div className={styles["form-email-input"]}>
              <label className={styles["label"]}>Your Email:</label>
              <input
                className={styles["input"]}
                placeholder="Email"
                type="email"
                ref={emailRef}
              />
            </div>
            <div className={styles["form-password-input"]}>
              <label className={styles["label"]}>Your Password:</label>
              <input
                className={styles["input"]}
                placeholder="Password"
                type="password"
                ref={passwordRef}
              />
            </div>
            <button className={styles.button} disabled={loading} type="submit">
              Log In
            </button>
          </form>
          <div className={styles.links}>
            <Link style={{ textDecoration: "none" }} href="/forgotpassword">
              Forgot Password?
            </Link>
            <Link style={{ textDecoration: "none" }} href="/signup">
              Need an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

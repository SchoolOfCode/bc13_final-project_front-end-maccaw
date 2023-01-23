import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/router";
import styles from "../styles/ForgotPassword.module.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { resetPassword } = useAuth();
  const [err, setErr] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setErr("");
      setMessage("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your email inbox for further instructions.");
    } catch {
      setErr("This email has not been registered.");
    }
    setLoading(false);
  }

  return (
    <div className={styles["main-container"]}>
      <div className={styles["glass-container"]}>
        <div className={styles["main-card"]}>
          <h1 className={styles.title}>Reset your password</h1>
          <form className={styles["form-container"]} onSubmit={handleSubmit}>
            <div className={styles["reset-message"]}>
              {err && <p>{err}</p>}
              {message && <p>{message}</p>}
            </div>
            <label className={styles.label}>
              Enter your login email to receive a reset password email:
            </label>
            <input
              className={styles.input}
              type="email"
              ref={emailRef}
              placeholder="Email"
            />

            <button className={styles.button} disabled={loading} type="submit">
              Reset
            </button>
          </form>
          <div className={styles.links}>
            <Link style={{ textDecoration: "none" }} href="/login">
              Login?
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

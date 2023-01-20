import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/router";

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
      setMessage("Check your inbox for further instructions");
    } catch {
      setErr("Failed to reset Password");
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>Password Reset</h1>
      {err && <h2>{err}</h2>}
      {message && <h2>{message}</h2>}

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} />

        <button disabled={loading} type="submit">
          Reset Password
        </button>
      </form>
      <Link href="/login">Login?</Link>
      <Link href="/signup">Need an account?</Link>
    </div>
  );
}

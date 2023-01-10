import React, { useRef, useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/router";

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
    <div>
      <h1>Log In</h1>
      {err && <h2>{err}</h2>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} />

        <label>Password</label>
        <input type="password" ref={passwordRef} />

        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <Link href="/forgotpassword">Forgot Password?</Link>
      <Link href="/signup">Need an account?</Link>
    </div>
  );
}

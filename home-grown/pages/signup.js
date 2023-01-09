import React, { useRef, useState } from "react";
import { useAuth } from '../context/AuthContext.js'
import { useRouter } from "next/router";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth()
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
 
  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setErr('Passwords do not match')
    }

    try {
      setErr('')
      setLoading(true)
      await signUp(emailRef.current.value,passwordRef.current.value )
      router.push("/dashboard")
    } catch {
      setErr('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      {err && <h2>{err}</h2>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" ref={emailRef} />

        <label>Password</label>
        <input type="password" ref={passwordRef} />

        <label>Confirm your Password</label>
        <input type="password" ref={passwordConfirmRef} />

        <button disabled={loading} type="submit">Sign Up</button>
      </form>
    </div>
  );
}

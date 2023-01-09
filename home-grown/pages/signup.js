import React, { useRef, useState } from "react";
import { useAuth } from '.../contexts/AuthContext'

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth()
  const [err, setErr] = useState('')
 
  async function handleSubmit(e){
    e.preventDefault()
    signup(email.Ref.current.value, passwordRef.current.value)

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setErr('Passwords do not match')
    }

    try {
      setErr('')
      await signup(email.Ref.current.value,passwordRef.current.value )
    } catch {
      setErr('Failed to create an account')
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>Email</label>
        <input type="email" ref={emailRef} />

        <label>Password</label>
        <input type="password" ref={passwordRef} />

        <label>Confirm your Password</label>
        <input type="password" ref={passwordConfirmRef} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

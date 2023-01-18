import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext.js";
import { useRouter } from "next/router";
import styles from "../styles/Signup.module.css";

//object of icon urls, so that the url can be saved in the database -> set icon to be animalIcons[e.target.name]
const animalIcons = {
  bunny: "https://cdn-icons-png.flaticon.com/512/4775/4775505.png",
  duck: "https://cdn-icons-png.flaticon.com/512/1326/1326405.png",
  cow: "https://cdn-icons-png.flaticon.com/512/2523/2523618.png",
  sheep: "https://cdn-icons-png.flaticon.com/512/9308/9308986.png",
  fox: "https://cdn-icons-png.flaticon.com/512/4322/4322992.png",
  goat: "https://cdn-icons-png.flaticon.com/512/6525/6525852.png"
};

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [iconLabel, setIconLabel] = useState("SELECT ICON")
  
  const [signUpForm, setSignUpFrom] = useState({
    firebase_id: "",
    last_name: " ",
    last_name: "",
    email: "",
    username: "",
    profile_picture: "",
    rating: 5
  });

  const router = useRouter();

  //function that conditionally shows the drop-down icons
  function dropDown(){
    setShow(!show)
  }

  //function that sets the selected icon to be in the form (as the image url) and then unshows the drop down
  function iconSelect(e){
    setSignUpFrom({
      ...signUpForm,
      profile_picture: animalIcons[e.target.alt],
    });
    setIconLabel(e.target.alt)
    setShow(false)
  }

  //function that sets the form data (apart from the profile icon)
  function formData(e) {
  
    setSignUpFrom({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  }

    //firebase registery of the user - submits the email and password to firbase
  async function handleSubmit(e) {
   
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setErr("Passwords do not match");
    }

    try {
      console.log("HELLO")
      setErr("");
      setLoading(true);
      const user = await signUp(emailRef.current.value, passwordRef.current.value);
  
      await fetch('https://homegrown-backend.onrender.com/api/homegrown/public/users', {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          ...signUpForm,
          firebase_id: user.user.uid,
        }),
      })
        .then((response) => response.json())
        .then((response) => console.log(JSON.stringify(response)));
  
      router.push("/dashboard");
    } catch {
      setErr("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className={styles["log-in-container"]}>
      <div className={styles["glass-container"]}>
        <div className={styles["log-in-card"]}>
          {err && <h2>{err}</h2>}
          <div className={styles["form-container"]}>
            <div className={styles["name-container"]}>
              <div className={styles["first-name"]}>
                <label className={styles["label"]}>Your First-Name:</label>
                <input
                  onChange={formData}
                  name="first_name"
                  className={styles["input"]}
                  placeholder="First-Name"
                  type="text"
                />
              </div>
              <div className={styles["last-name"]}>
                <label className={styles["label"]}>Your Last-Name:</label>
                <input
                  onChange={formData}
                  name="last_name"
                  className={styles["input"]}
                  placeholder="Last-Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles["icon-username-container"]}>
         
              <div className={styles["dropdown"]}>
              <label className={styles["label"]}>Profile Icon:</label>
                <button onClick={dropDown} className={styles["dropbtn"]}>
                {iconLabel.toUpperCase()}
                </button>
                {show && <div id="myDropdown" className={styles["dropdown-content"]}>
                  <img
                  onClick={iconSelect}
                    id="bunny"
                    src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"
                    alt="bunny"
                  />
                  <img
                  onClick={iconSelect}
                    id="duck"
                    src="https://cdn-icons-png.flaticon.com/512/1326/1326405.png"
                    alt="duck"
                  />
                  <img
                  onClick={iconSelect}
                    id="cow"
                    src="https://cdn-icons-png.flaticon.com/512/2523/2523618.png"
                    alt="cow"
                  />
                  <img
                  onClick={iconSelect}
                    id="sheep"
                    src="https://cdn-icons-png.flaticon.com/512/7923/7923884.png"
                    alt="sheep"
                  />
                  <img
                  onClick={iconSelect}
                    id="fox"
                    src="https://cdn-icons-png.flaticon.com/512/4322/4322992.png"
                    alt="fox"
                  />
                  <img
                  onClick={iconSelect}
                    id="goat"
                    src="https://cdn-icons-png.flaticon.com/512/6525/6525852.png"
                    alt="goat"
                  />
                </div> }
              </div>
              <div className={styles["user-name"]}>
                <label className={styles["label"]}>User-Name:</label>
                <input
                  onChange={formData}
                  name="username"
                  className={styles["input"]}
                  placeholder="User-Name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles["form-email-input"]}>
              <label className={styles["label"]}>Your Email:</label>
              <input
                onChange={formData}
                name="email"
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
            <div className={styles["form-password-input"]}>
              <label className={styles["label"]}>Confirm your Password</label>
              <input
                className={styles["input"]}
                placeholder="Confirm Password"
                type="password"
                ref={passwordConfirmRef}
              />
            </div>
            <button onClick={handleSubmit} className={styles.button} disabled={loading} type="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

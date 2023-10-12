"use client";
import Link from "next/link";
import styles from "./login.module.css";
import { auth } from "@/app/components/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { emailExp } from "@/app/components/auth";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");

  const redirection = useRouter();
  const verify = () => {
    if (email.match(emailExp)) {
      if (pword.length >= 8) {
        signInWithEmailAndPassword(auth, email, pword)
          .then((userCredential) => {
            const userName = userCredential.user.displayName;
            localStorage.setItem("userName", userName);
            localStorage.setItem("signIn", true);
            alert("You have succesfully signed in");
            redirection.push("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode + " | " + errorMessage);
          });
      } else {
        alert("password must have at least 8 characters");
      }
    } else {
      alert("please use a valid email");
    }
  };
  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.login} flex`}>
          <h1>Welcome Back</h1>
          <form action="" className={`${styles.loginForm} flex`}>
            <input
              type="input"
              name="email"
              placeholder="Email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="input"
              name="pword"
              placeholder="Password"
              id="pword"
              onChange={(e) => {
                setPword(e.target.value);
              }}
            />
            <button
              type="button"
              name="Login"
              className={`${styles.loginBtn} btn`}
              onClick={verify}
            >
              Login
            </button>
            <Link href="/authentication/signup">
              <p className={`${styles.redirect}`}>
                <em>Not a member? Sign Up...</em>
              </p>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
}

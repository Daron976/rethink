"use client";
import Link from "next/link";
import styles from "./signup.module.css";
import { useState } from "react";
import { auth } from "@/app/components/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { emailExp } from "@/app/components/auth";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pword, setPword] = useState("");

  const redirection = useRouter();

  const valPword = () => {
    if (name.length >= 3) {
      if (email.match(emailExp)) {
        if (pword.length >= 8) {
          createUserWithEmailAndPassword(auth, email, pword)
            .then((userCred) => {
              updateProfile(auth.currentUser, {
                displayName: name,
              });
              setName("");
              setEmail("");
              setPword("");
              localStorage.setItem("userName", name);
              localStorage.setItem("signIn", true);
              alert("account succesfully created");
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
    } else {
      alert("username must have at least 3 characters");
    }
  };

  return (
    <>
      <main className={styles.main}>
        <section className={`${styles.signUp} flex`}>
          <h1>Get Started</h1>
          <form action="" className={`${styles.signUpForm} flex`}>
            <input
              type="input"
              name="name"
              placeholder="Username"
              id="name"
              // value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="input"
              name="email"
              placeholder="Email"
              id="email"
              // value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="input"
              name="password"
              placeholder="Password"
              id="password"
              // value={pword}
              onChange={(e) => {
                setPword(e.target.value);
              }}
            />
            <button
              type="button"
              name="signUp"
              className={`${styles.signUpBtn} btn`}
              onClick={valPword}
            >
              Sign Up
            </button>
            <Link href="/authentication/login">
              <p className={`${styles.redirect}`}>
                <em>Already a member? Login...</em>
              </p>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
}

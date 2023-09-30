"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "../firebase";
import { redirect } from "next/navigation";

function signIn(email: string, password: string, onFailed: () => void) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const email = userCredential.user.email;
      console.log(`welcome ${email}`);
      redirect("/admin");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      onFailed();
    });
}

export default function Login() {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData) as unknown as {
      email: string;
      password: string;
    };
    signIn(email, password, () => setText("Failed Bro!"));
  };

  return (
    <main className="flex h-auto flex-col items-center justify-center px-8 py-6 max-md:px-1">
      <form
        onSubmit={handleSubmit}
        className="flex h-96 w-96 flex-col items-center justify-center gap-y-6 rounded-xl bg-emerald-900 p-4 shadow-xl"
      >
        <h2 className="font-sans text-3xl font-bold">Login</h2>
        <label htmlFor="email" className="flex w-full flex-col">
          email
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-md px-1 text-black"
            required
          />
        </label>
        <label htmlFor="password" className="flex w-full flex-col">
          password
          <input
            type="password"
            name="password"
            id="password"
            className="rounded-md px-1 text-black"
            required
          />
          {/* <Link href={"#"} className="self-end text-xs text-blue-600">
            <u>forget password?</u>
          </Link> */}
        </label>
        <button type="submit" className="min-w-10">
          Login
        </button>
        {/* <div className="text-sm">
          Have no account?{" "}
          <Link href={"/register"} className="text-blue-600">
            <u>Sign up</u>
          </Link>{" "}
          now
        </div> */}
        <h3 className="text-red-500">{text}</h3>
      </form>
    </main>
  );
}

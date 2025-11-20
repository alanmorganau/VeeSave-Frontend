"use client";

import { FormEvent, useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOAuth = (provider: string) => {
    window.location.href = "/coming-soon";
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    alert("Email/password login will be implemented soon.");
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        paddingTop: "80px",
        textAlign: "center",
      }}
    >
      <h1>Login</h1>

      <button
        onClick={() => handleOAuth("Google")}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          marginTop: "20px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
        }}
      >
        Sign in with Google
      </button>

      <button
        onClick={() => handleOAuth("Facebook")}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          marginTop: "12px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
        }}
      >
        Sign in with Facebook (coming soon)
      </button>

      <button
        onClick={() => handleOAuth("LinkedIn")}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          marginTop: "12px",
          borderRadius: "6px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
        }}
      >
        Sign in with LinkedIn (coming soon)
      </button>

      <p style={{ marginTop: "20px" }}>or continue with email</p>

      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "12px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            marginBottom: "12px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ffcc00",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

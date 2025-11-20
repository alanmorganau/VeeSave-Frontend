"use client";

import { useState, FormEvent } from "react";

export default function RegisterPage() {
  const [message, setMessage] = useState<string | null>(null);

  const handleOAuth = (provider: string) => {
    // Redirect user to OAuth provider endpoint
    window.location.href = "/api/auth/oauth/" + provider;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Registration successful! Check your email.");
      } else {
        const data = await res.json();
        setMessage(data.error || "Registration failed.");
      }
    } catch (err) {
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "420px", margin: "40px auto", padding: "20px" }}>
      <h1>Create Your VeeSave Account</h1>

      {message && (
        <div
          style={{
            background: "#f7f7f7",
            padding: "12px",
            border: "1px solid #ccc",
            marginBottom: "20px",
          }}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" required />
        <br />
        <input name="lastName" placeholder="Last Name" required />
        <br />
        <input name="email" placeholder="Email" type="email" required />
        <br />
        <input name="password" placeholder="Password" type="password" required />
        <br />
        <button type="submit">Register</button>
      </form>

      <hr style={{ margin: "30px 0" }} />

      <h3>Or Sign Up With</h3>
      <button onClick={() => handleOAuth("google")}>Google</button>
      <button onClick={() => handleOAuth("facebook")}>Facebook</button>
    </div>
  );
}

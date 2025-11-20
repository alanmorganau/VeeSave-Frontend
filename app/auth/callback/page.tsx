"use client";

import { useEffect, useState } from "react";

export default function AuthCallbackPage() {
  const [message, setMessage] = useState("Processing Google sign-in...");
  const [details, setDetails] = useState<string | null>(null);
  const [backendResponse, setBackendResponse] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (code) {
      setMessage("Google sign-in returned a code. Sending to backend");

      fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((json) => {
          setBackendResponse(json);
          console.log("Backend OAuth response:", json);
        })
        .catch((err) => {
          console.error("Backend OAuth error:", err);
        });

      setDetails("Code received. Backend handling is scaffolded only.");
    } else if (error) {
      setMessage("Google sign-in reported an error.");
      setDetails("Error: " + error);
    } else {
      setMessage("No Google sign-in data returned.");
    }
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        paddingTop: "80px",
        textAlign: "center",
      }}
    >
      <h1>VeeSave Sign-in</h1>

      <p style={{ marginTop: "16px" }}>{message}</p>
      {details && (
        <p style={{ marginTop: "12px", fontSize: "14px" }}>{details}</p>
      )}

      {backendResponse && (
        <pre
          style={{
            marginTop: "20px",
            fontSize: "12px",
            textAlign: "left",
            background: "#f8f8f8",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
{JSON.stringify(backendResponse, null, 2)}
        </pre>
      )}

      <p style={{ marginTop: "40px", fontSize: "14px" }}>
        When backend OAuth goes live, this screen will redirect you automatically.
      </p>
    </div>
  );
}

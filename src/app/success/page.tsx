"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎉 Payment Successful!</h1>
      <p style={styles.text}>Thank you for purchasing the Pro Plan.</p>
      <button style={styles.button} onClick={() => router.push("/")}>
        Back to Main Menu
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center" as const,
    backgroundColor: "#f0f4f8",
  },
  heading: { fontSize: "2rem", color: "#16a34a", marginBottom: "1rem" },
  text: { fontSize: "1.2rem", marginBottom: "2rem" },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#4F46E5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

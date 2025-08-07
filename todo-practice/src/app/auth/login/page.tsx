"use client";
import Circle from "../../components/bgCircle";
import { useRouter } from "next/navigation";
import kidSchool from "@/assets/kidSchool.png";
import { useState } from "react";
import Image from "next/image";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginAccount() {
    console.log("VALUES:", { username, password });

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/home");
    } else {
      alert(data.error || "Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 relative flex flex-col overflow-hidden">
      {/* Background circles */}
      <Circle />

      {/* Main content */}
      <div className="flex-1 flex flex-col px-8 pt-60">
        {/* Header text */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-black mb-4">Welcome back</h1>
          <Image
            className="mx-auto"
            src={kidSchool}
            alt="kid coming back from school"
          ></Image>
        </div>

        {/* Form inputs */}
        <div className="space-y-6 mb-8">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Enter your Name"
            className="w-full px-6 py-4 rounded-4xl bg-white outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-black"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Enter Password"
            className="w-full px-6 py-4 rounded-4xl bg-white outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-black"
          />
        </div>

        <p className="text-[#50C2C9] text-center mb-auto">
          <button>Forget password ?</button>
        </p>
      </div>

      {/* Bottom buttons section */}
      <div className="px-8 pb-20 mx-auto">
        <button
          onClick={() => loginAccount()}
          className="w-[350px] bg-[#50C2C9] text-white rounded-lg py-4 text-[18px] font-bold shadow-sm mb-6"
        >
          Login
        </button>

        {/* Register link */}
        <p className="text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => router.push("/auth/register")}
            className="text-[#50C2C9] font-medium"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}

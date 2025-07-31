"use client";
import Circle from "../../components/bgCircle";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 relative flex flex-col overflow-hidden">
      {/* Background circles */}
      <Circle />

      {/* Main content */}
      <div className="flex-1 flex flex-col px-8 pt-60">
        {/* Header text */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-black mb-4">
            Welcome to Onboard!
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Let&apos;s help to meet up your tasks.
          </p>
        </div>

        {/* Form inputs */}
        <div className="space-y-6 mb-auto">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-6 py-4 rounded-4xl bg-white  outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-black"
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full px-6 py-4 rounded-4xl bg-white outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-black"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-6 py-4 rounded-4xl bg-white outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-black"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full px-6 py-4 rounded-4xl bg-white outline-none focus:ring-2 focus:ring-blue-400 text-black placeholder-black"
          />
        </div>
      </div>

      {/* Bottom buttons section */}
      <div className="px-8 pb-20">
        <button
          onClick={() => router.push("/home")}
          className="w-full bg-[#50C2C9] text-white rounded-lg py-4 text-[18px] font-bold shadow-sm mb-6"
        >
          Register
        </button>

        {/* Sign in link */}
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/auth/login")}
            className="text-[#50C2C9] font-medium"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}

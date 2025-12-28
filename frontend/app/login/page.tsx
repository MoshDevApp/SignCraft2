"use client";

import api from "@/lib/api";

export default function Login() {
  async function handleLogin(e: any) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 shadow w-80">
        <h2 className="text-xl mb-4">Login</h2>
        <input name="email" placeholder="Email" className="border p-2 w-full mb-3" />
        <input name="password" type="password" placeholder="Password" className="border p-2 w-full mb-3" />
        <button className="bg-black text-white w-full py-2">Login</button>
      </form>
    </main>
  );
}

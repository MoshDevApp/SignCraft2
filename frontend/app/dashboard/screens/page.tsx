"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Screens() {
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    api.get("/screens").then(res => setScreens(res.data));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <Header title="Screens" />
        <ul>
          {screens.map((s: any) => (
            <li key={s.id} className="border p-2 mb-2">
              {s.name} — {s.status}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

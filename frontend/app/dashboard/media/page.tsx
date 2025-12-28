"use client";

import api from "@/lib/api";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Media() {
  async function upload(e: any) {
    const file = e.target.files[0];
    const form = new FormData();
    form.append("file", file);

    await api.post("/media", form);
    alert("Uploaded");
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <Header title="Media" />
        <input type="file" onChange={upload} />
      </main>
    </div>
  );
}

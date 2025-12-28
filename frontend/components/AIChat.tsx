"use client";

import { useState } from "react";
import api from "@/lib/api";

export default function AIChat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function send() {
    if (!input.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // ✅ CORRECT BACKEND ENDPOINT
      const res = await api.post("/api/ai/diagnose", {
        message: input
      });

      setMessages((prev) => [
        ...prev,
        `You: ${input}`,
        `AI: ${res.data.response}`
      ]);

      setInput("");
    } catch (err) {
      setError("AI service is currently unavailable.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="border p-3 h-64 overflow-auto mb-3 text-sm bg-white">
        {messages.map((m, i) => (
          <p key={i}>{m}</p>
        ))}
        {loading && <p className="text-gray-400">AI is thinking…</p>}
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 w-full"
        placeholder="Ask the AI…"
      />

      <button
        onClick={send}
        disabled={loading}
        className="mt-2 bg-black text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </div>
  );
}

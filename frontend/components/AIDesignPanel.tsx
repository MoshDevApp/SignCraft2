"use client";

import { useState } from "react";
import api from "@/lib/api";
import { CanvasElement } from "@/lib/designTypes";
import { v4 as uuid } from "uuid";

export default function AIDesignPanel({
  elements,
  setElements
}: {
  elements: CanvasElement[];
  setElements: (els: CanvasElement[]) => void;
}) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // ✅ USE THE GENERIC AI GENERATE ENDPOINT
      const res = await api.post("/api/ai/generate", {
        prompt
      });

      const text = res.data.response;

      setElements([
        ...elements,
        {
          id: uuid(),
          type: "text",
          text,
          x: 100,
          y: 180,
          fontSize: 36,
          fill: "blue"
        }
      ]);

      setPrompt("");
    } catch (err) {
      setError("AI generation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="border p-4 bg-white">
      <h3 className="font-semibold mb-2">AI Design Assistant</h3>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border w-full p-2 mb-2"
        placeholder="Generate a poster headline…"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={generate}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Thinking…" : "Generate"}
      </button>
    </div>
  );
}

"use client";

import { useRef, useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DesignCanvas from "@/components/DesignCanvas.dynamic";
import DesignToolbar from "@/components/DesignToolbar";
import AIDesignPanel from "@/components/AIDesignPanel";
import api from "@/lib/api";
import { CanvasElement } from "@/lib/designTypes";

export default function DesignStudio() {
  const [elements, setElements] = useState<CanvasElement[]>([]);
  const stageRef = useRef<any>(null);

  /**
   * Export canvas → PNG → upload to backend
   */
  async function saveDesign() {
    if (!stageRef.current) return;

    const dataUrl = stageRef.current.toDataURL();
    const blob = await fetch(dataUrl).then(res => res.blob());

    const form = new FormData();
    form.append("file", blob, "design.png");

    await api.post("/media", form);
    alert("Design saved to Media Library");
  }

  return (
    <div className="flex">
      <Sidebar />
      <main className="p-6 flex-1">
        <Header title="Design Studio" />

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <DesignToolbar
              elements={elements}
              setElements={setElements}
            />

            <DesignCanvas
              ref={stageRef}
              elements={elements}
              setElements={setElements}
            />

            <button
              onClick={saveDesign}
              className="mt-4 bg-black text-white px-4 py-2 rounded"
            >
              Save Design
            </button>
          </div>

          <AIDesignPanel
            elements={elements}
            setElements={setElements}
          />
        </div>
      </main>
    </div>
  );
}

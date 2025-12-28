"use client";

import { v4 as uuid } from "uuid";
import { CanvasElement } from "@/lib/designTypes";

export default function DesignToolbar({
  elements,
  setElements
}: {
  elements: CanvasElement[];
  setElements: (els: CanvasElement[]) => void;
}) {
  const addText = () =>
    setElements([
      ...elements,
      {
        id: uuid(),
        type: "text",
        text: "New Text",
        x: 50,
        y: 50,
        fontSize: 32,
        fill: "#000"
      }
    ]);

  const addRect = () =>
    setElements([
      ...elements,
      {
        id: uuid(),
        type: "rect",
        x: 100,
        y: 100,
        width: 200,
        height: 100,
        fill: "#e5e7eb"
      }
    ]);

  return (
    <div className="space-x-3 mb-4">
      <button onClick={addText} className="btn">Add Text</button>
      <button onClick={addRect} className="btn">Add Shape</button>
    </div>
  );
}


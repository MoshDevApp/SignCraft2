"use client";

import { Stage, Layer, Text, Rect } from "react-konva";
import { forwardRef } from "react";
import { CanvasElement } from "@/lib/designTypes";

/**
 * DesignCanvas
 * - Renders Konva canvas
 * - Exposes stageRef so we can export image
 */
const DesignCanvas = forwardRef<any, {
  elements: CanvasElement[];
  setElements: (els: CanvasElement[]) => void;
}>(({ elements, setElements }, stageRef) => {

  const update = (id: string, attrs: any) => {
    setElements(elements.map(el =>
      el.id === id ? { ...el, ...attrs } : el
    ));
  };

  return (
    <Stage
      ref={stageRef}
      width={800}
      height={450}
      className="border bg-white"
    >
      <Layer>
        {elements.map(el => {
          if (el.type === "text") {
            return (
              <Text
                key={el.id}
                {...el}
                draggable
                onDragEnd={e =>
                  update(el.id, { x: e.target.x(), y: e.target.y() })
                }
              />
            );
          }

          if (el.type === "rect") {
            return (
              <Rect
                key={el.id}
                {...el}
                draggable
                onDragEnd={e =>
                  update(el.id, { x: e.target.x(), y: e.target.y() })
                }
              />
            );
          }

          return null;
        })}
      </Layer>
    </Stage>
  );
});

export default DesignCanvas;

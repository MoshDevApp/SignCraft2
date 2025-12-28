/**
 * Shared types for canvas elements
 */
export type CanvasElement =
  | {
      id: string;
      type: "text";
      text: string;
      x: number;
      y: number;
      fontSize: number;
      fill: string;
    }
  | {
      id: string;
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
      fill: string;
    }
  | {
      id: string;
      type: "image";
      x: number;
      y: number;
      width: number;
      height: number;
      src: string;
    };

"use client";

import dynamic from "next/dynamic";

/**
 * Dynamically load DesignCanvas
 * SSR is disabled to avoid `canvas` dependency
 */
const DesignCanvas = dynamic(
  () => import("./DesignCanvas"),
  { ssr: false }
);

export default DesignCanvas;

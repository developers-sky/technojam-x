"use client";
import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";
const Globe = () => {
  useEffect(() => {
    const canvas:any = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/uXDxemR4jj-F4OwL/scene.splinecode");
  }, []);
  return (
    <div className="h-screen">
      <canvas id="canvas3d"></canvas>
      {/* <script
        async
        src="https://unpkg.com/es-module-shims@1.3.6/dist/es-module-shims.js"
      ></script> */}
    </div>
  );
};

export default Globe;

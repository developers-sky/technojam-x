"use client";
import React, { useEffect } from "react";
import { Application } from "@splinetool/runtime";
const Text3D = () => {
  useEffect(() => {
    const canvas:any = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load('https://prod.spline.design/qXwaQLryHxwzSnNG/scene.splinecode');
  }, []);
  return (
    <div className="h-screen">
      <canvas id="canvas3d"></canvas>
    </div>
  );
};
export default Text3D;
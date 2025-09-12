"use client";
import { useState } from "react";

export default function Home() {
  const [color, setColor] = useState("blue");
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <h1>Hello World</h1>
      This is a new project to be deployed on Vercel
      <button
        className={`bg-${color}-500 text-white p-2 rounded-md`}
        onClick={() => setColor("red")}
      >
        Click me to change the color to {color}
      </button>
    </div>
  );
}

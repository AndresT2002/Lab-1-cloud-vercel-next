"use client";
import { useState } from "react";

export default function Home() {
  const colors = new Map<number, string>();
  colors.set(1, "bg-blue-500");
  colors.set(-1, "bg-red-500");

  const [color, setColor] = useState(1);
  return (
    <div className=" flex flex-col items-center justify-center h-screen">
      <h1>Hello World</h1>
      This is a new project to be deployed on Vercel
      <button
        className={`${colors.get(
          color
        )} text-white p-2 rounded-md border border-white`}
        onClick={() => setColor(color * -1)}
      >
        Click me to change the color to {colors.get(color * -1)}
      </button>
    </div>
  );
}

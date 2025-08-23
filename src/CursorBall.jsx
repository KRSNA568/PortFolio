
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Drag() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", cursor: "none" }}>
      <motion.div
        style={{
          width: 10,
          height: 10,
          backgroundColor: "#5686F5",
          borderRadius: "50%",
          position: "fixed",
          left: pos.x - 15,
          top: pos.y - 15,
        }}
        animate={{}}
      />
    </div>
  );
}

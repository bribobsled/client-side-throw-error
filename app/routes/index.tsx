import { ActionFunction } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import { useState, useEffect } from "react";
import { json } from "@remix-run/server-runtime";

export default function Index() {
  const [color, setColor] = useState("black");

  const colors = ["red", "green", "blue", "organge", "pink", "purple"];

  function changeColor() {
    console.log("pressed");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    if (randomColor == "red") {
      throw json({ error: "You landed on red" }, { status: 403 });
    }
  }

  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        backgroundColor: `${color}`,
        color: "white",
        textAlign: "center",
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
      }}
    >
      <h1>Click to generate random color</h1>
      <p>A json error is thrown if the color lands on red</p>

      <button style={{ width: "25%", height: "10%" }} onClick={changeColor}>
        Click Me!
      </button>
    </div>
  );
}

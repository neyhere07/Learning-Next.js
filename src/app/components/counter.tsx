"use client"; //In Next.js 15, react components are server components by default and can't handle state or interactivity to convert this counter server component to a counter client component,capable of  interactivity and the "use client" directive at the very top of the file is added.
import { useState } from "react";

export const Counter = () => {
  console.log("Counter component"); // Log message to indicate component rendering
  const [count, setCount] = useState(0); //Count state variable

  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button> //Button to increment count
    
  );
};
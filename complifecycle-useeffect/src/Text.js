import React from "react";
import { useState, useEffect } from "react"; //is used to control what happens depends on component lifecycle

export const Text = () => {
  const [text, setText] = useState("");

  // to use useEffect:
  useEffect(() => {
    console.log("COMPONENT MOUNTED");

    return () => {
      console.log("COMPONENT UNMOUNTED");
    };
  }, []);

  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1> {text}</h1>
    </div>
  );
};
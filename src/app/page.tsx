"use client";

import { useEffect } from "react";

export default function Home() {
  function myFunction() {
    window.location.href = "https://google.com/";
  }
  useEffect(() => {
    myFunction();
  }, []);
  return <main className="flex flex-col items-center justify-center"></main>;
}

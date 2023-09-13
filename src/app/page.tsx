"use client";

import { useEffect } from "react";

export default function Home() {
  function myFunction() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.eventosmart.methodus";
  }
  useEffect(() => {
    myFunction();
  }, []);
  return <main className="flex flex-col items-center justify-center"></main>;
}

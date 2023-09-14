"use client";

import { useEffect } from "react";

export default function Home() {
  function myFunction() {
    window.location.href =
      "https://apps.apple.com/br/app/eventosmart/id6465455717";
  }
  useEffect(() => {
    myFunction();
  }, []);
  return <main className="flex flex-col items-center justify-center"></main>;
}

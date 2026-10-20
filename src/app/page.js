'use client'

import { OurContext } from "@/context/ContextProvider";
import { useContext } from "react";
import Header from "./components/Header";

export default function Home() {
  const {products} = useContext(OurContext)
  return (
    <div>
      <Header />
    </div>
  );
}

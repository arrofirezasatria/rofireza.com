import React from "react";
import AppBarHero from "../components/AppBar";

export default function ContainerHero({ children }) {
  return (
    <div>
      <AppBarHero />
      <main>{children}</main>
    </div>
  );
}

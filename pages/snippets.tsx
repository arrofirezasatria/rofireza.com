import React from "react";
import ContainerHero from "../components/ContainerHero";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { CounterState } from "redux/counter";

export default function snippets() {
  const { value } = useSelector((state: Counter) => state.counter);
  return (
    <ContainerHero>
      <Box>Snippets</Box>
      {value}
    </ContainerHero>
  );
}

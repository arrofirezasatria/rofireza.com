import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ContainerHero from "../components/ContainerHero";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <ContainerHero>
      <Box
        sx={{
          height: "400px",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="h6" variant="h6">
          rofireza.io
        </Typography>
      </Box>
    </ContainerHero>
  );
}

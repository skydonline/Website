import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelLaptopLoader from "../voxel-laptop-loader";
import dynamic from "next/dynamic";
import Footer from "../footer";

const LazyVoxelLaptop = dynamic(() => import("../voxel-laptop"), {
  ssr: false,
  loading: () => <VoxelLaptopLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sky Deng</title>
        <meta name="description" content="Sky's homepage" />
        <meta name="author" content="Sky Deng" />
        <link rel="icon" href="/website-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/website-icon.png" type="image/png" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelLaptop />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;

import { Box, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Sky Deng. All Rights Reserved.
      </Box>
      <Box align="center" opacity={0.4} fontSize="sm">
        Inspired by{" "}
        <Link href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama
        </Link>
        .
      </Box>
    </>
  );
};

export default Footer;

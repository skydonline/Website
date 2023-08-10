import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon, EmailIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m Sky.
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sky Deng
            </Heading>
            <p>Computer Science Student & Software Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Paragraph TEMPORARY{" "}
            <NextLink passHref href="/works/TEMPWORKS" scroll={false}>
              <Link>TEMPORARY</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" mt={4}>
            <NextLink passHref href="/works" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2004</BioYear>
            Born in Toronto, Canada.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Worked as a Web Developer at Auranova Inc.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link target="_blank" href="www.linkedin.com/in/skydeng">
                <Button
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  colorScheme="teal"
                  variant="ghost"
                >
                  Sky Deng
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link target="_blank" href="https://github.com/skydonline">
                <Button
                  leftIcon={<Icon as={IoLogoGithub} />}
                  colorScheme="teal"
                  variant="ghost"
                >
                  @skydonline
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link target="_blank" href="https://www.instagram.com/skyd_2004/">
                <Button
                  leftIcon={<Icon as={IoLogoInstagram} />}
                  colorScheme="teal"
                  variant="ghost"
                >
                  @skyd_2004
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link target="_blank" href="https://youtube.com/@skyd.online">
                <Button
                  leftIcon={<Icon as={IoLogoYoutube} />}
                  colorScheme="teal"
                  variant="ghost"
                >
                  skyd.online
                </Button>
              </Link>
            </ListItem>
          </List>

          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <p>If you have any questions, feel free to contact me via email.</p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="mailto:sky.deng.online@outlook.com"
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Email
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;

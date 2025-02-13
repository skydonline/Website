import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  List
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoYoutube
} from 'react-icons/io5'
import {
  BiLogoPython,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoDjango,
  BiLogoFlask,
  BiLogoDocker,
  BiLogoGit,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGithub
} from 'react-icons/bi'
import { BioItem, SocialListItem, Tech } from '../components/home'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hi there!!
        </Box>

        <Box display={{ md: 'flex' }}>
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
            About Me
          </Heading>
          <Paragraph>
            Welcome! My name is Sky, and I&apos;m a Computer Science co-op
            student enrolled at McMaster University. I&apos;ve had a knack for
            all things computers, ever since I was young, building little
            Arduino projects. Through my long 10 year career as a competitive
            swimmer, I know what it means to be dedicated, hard-working and
            manage time well. I now apply those same skills to my early career
            as a software engineer. You can see my projects below!{' '}
            {/* Adding links to paragraph
            
            <NextLink passHref href="/works/TEMPWORKS" scroll={false}>
              <Link>TEMPORARY</Link>
            </NextLink>
  */}
          </Paragraph>

          <Box align="center" mt={4}>
            <NextLink passHref href="/projects" scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Projects
              </Button>
            </NextLink>
          </Box>

          <Box mt="4">
            <Paragraph>
              Other than coding, I thoroughly enjoy swimming, going to the gym,
              hanging out with friends and family, or learning on the internet.
              I like to document my learning in the posts section of this
              website, which you can find below.
            </Paragraph>
            <Box align="center" mt={4}>
              <NextLink passHref href="/posts" scroll={false}>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  Posts
                </Button>
              </NextLink>
            </Box>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <BioItem
            title="Teaching Assistant @ McMaster University"
            date="Sep'24 - Present"
          />
          <BioItem
            title="Software Developer @ McMaster Satellite Team"
            date="Feb'24 - Present"
          />
          <BioItem title="DeltaHacks Executive Team" date="Aug'23 - Present" />
          <BioItem
            title="Software Developer @ Google Developer Student Clubs"
            date="Sep'23 - Sep'24"
          />
          <BioItem
            title="Software Engineer @ McMaster AI"
            date="Sep'23 - Sep'24"
          />
          <BioItem
            title="Student Tutor @ McMaster Science Society"
            date="Dec'22 - Aug'23"
          />
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Technologies
          </Heading>
          <Tech name="Python" icon={BiLogoPython} />
          <Tech name="JavaScript" icon={BiLogoJavascript} />
          <Tech name="TypeScript" icon={BiLogoTypescript} />
          <Tech name="React" icon={BiLogoReact} />
          <Tech name="Node.js" icon={BiLogoNodejs} />
          <Tech name="Git" icon={BiLogoGit} />
          <Tech name="GitHub" icon={BiLogoGithub} />
          <Tech name="Django" icon={BiLogoDjango} />
          <Tech name="Flask" icon={BiLogoFlask} />
          <Tech name="Docker" icon={BiLogoDocker} />
          <Tech name="MongoDB" icon={BiLogoMongodb} />
          <Tech name="Java" icon={BiLogoJava} />
          <Tech name="HTML" icon={BiLogoHtml5} />
          <Tech name="CSS" icon={BiLogoCss3} />
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <SocialListItem
              link="https://www.linkedin.com/in/skydeng"
              icon={IoLogoLinkedin}
            >
              Sky Deng
            </SocialListItem>

            <SocialListItem
              link="https://github.com/skydonline"
              icon={IoLogoGithub}
            >
              @skydonline
            </SocialListItem>

            <SocialListItem
              link="https://www.instagram.com/sky.deng_"
              icon={IoLogoInstagram}
            >
              @skyd_2004
            </SocialListItem>

            <SocialListItem
              link="https://youtube.com/@skyd.online"
              icon={IoLogoYoutube}
            >
              skyd.online
            </SocialListItem>
          </List>
          {/*
          <Heading as="h3" variant="section-title">
            Contact
          </Heading>
          <p>
            If you have any questions, feel free to contact me via email below.
          </p>

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
          */}
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

import { Box, Container, Heading, List } from '@chakra-ui/react'
import Image from 'next/image'
import { Title } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import { PostListItem } from '../../../components/posts'
import certificate from '../../../public/images/posts/intro-mobile-dev-cert.jpeg'

const Work = () => (
  <Layout title="Meta React Native Specialization">
    <Container>
      <Title>Introduction to Mobile Development</Title>
      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Main Learnings:
      </Heading>
      <List>
        <PostListItem>Role of a web and mobile developer</PostListItem>
        <PostListItem>
          Technical aspects of the web, web browsers and mobile development
        </PostListItem>
        <PostListItem>Functionality of JavaScript</PostListItem>
      </List>

      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Content:
      </Heading>
      <P>
        Mobile development is crucial in the modern world, since so many people
        have mobile devices. We want to ensure that they have a great user
        experience on their device, regardless of operating system or device
        type.
      </P>
      <Box mt={2} />
      <P>
        The difficulty lies in creating a great application for both the web and
        mobile devices. We strive to have great UI/UX on both, but each
        application have various quirks about it, that force use to create
        different versions of the application depending on how the user is
        accessing it.
      </P>

      <Heading as="h5" fontSize={17} mt={4}>
        Web
      </Heading>
      <P>
        A webpage is the document displayed on your screen, whereas a website is
        a collection of different webpages. Each webpage consists of 3 main
        technologies:<b> HTML, CSS and JavaScript</b>. HTML is the physical
        structure of the page (e.g. text, boxes), CSS is the styling of the
        physical structure (e.g. color, size), and JavaScript controls the user
        interaction (e.g. animations, dynamic UI).
      </P>
      <Box mt={2} />
      <P>
        A server, as the name implies, provides services and runs applications
        to other computers. These can be anything, such as websites or messaging
        apps. Web servers have numerous functions, and can respond to web
        requests from client (the person on another computer), by sending back a
        response that contains the website&apos;s content.
      </P>
      <P>
        A web browser allows the user to browse the World Wide Web by sending a
        request to the web server, and then displays the web server response
        content on your screen. The address bar contains the URL (Uniform
        Resource Locator), which contains the domain name of the website. When
        making requests to that URL, the web browser and the web server
        communicate through a protocol, typically the Hypertext Transfer
        Protocol Secure (HTTPS). This process is called the request response
        cycle. Think of it as computers having a conversation.
      </P>
      <P>
        JavaScript is considered the language of the web. It is on every
        website, enabling them to have interactive elements and dynamic content
        for the user. Modern web browsers have a JavaScript engine component to
        them, which compiles and executes the JavaScript code, and then sends it
        back to the browser for rendering. JavaScript is popular due to its
        speed, thanks to a feature called just-in-time compilation. This means
        that compilation is done during execution. The engine also compiles the
        code into an optimized version, so it can run more efficiently on the
        users device.
      </P>

      <Heading as="h5" fontSize={17} mt={4}>
        Mobile Development
      </Heading>
      <P>
        The most popular mobile device operating systems in the world, iOS and
        Android, run on different languages. Most iOS applications run on Swift,
        a programming language developed by Apple that is optimized for Apple
        devices. However, Objective-C can also be used, and was the main
        language used for iOS development prior to Swift. Android applications
        can run on either Kotlin or Java, although recently, Kotlin has been
        gaining signficant popularity among Android developers due to a more
        concise syntax (being able to write less code and be more readable).
      </P>

      <Box mt={6} mb={4}>
        <Image
          className="grid-item-thumbnail"
          src={certificate}
          alt="certification"
          placeholder="blur"
          loading="lazy"
        />
      </Box>
    </Container>
  </Layout>
)

export default Work

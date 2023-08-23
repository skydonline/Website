import { Box, Container, Heading, List, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { ImageCaption, Title } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import { PostListItem } from '../../../components/posts'
import certificate from '../../../public/images/posts/intro-mobile-dev-cert.jpeg'
import html from '../../../public/images/posts/html-dom.png'
import css from '../../../public/images/posts/css.png'

const Work = () => (
  <Layout title="Meta React Native Specialization">
    <Container>
      <Title>Introduction to Mobile Development</Title>
      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        Main Learnings:
      </Heading>
      <List>
        <PostListItem>Role of a cross-platform mobile developer</PostListItem>
        <PostListItem>Fundamentals about React and React Native</PostListItem>
        <PostListItem>Basics of HTML and CSS</PostListItem>
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

      <Heading as="h5" fontSize={17} mt={4}>
        HTML
      </Heading>
      <P>
        Hyper Text Markup Language (HTML) defines the structure of the webpage.
        It is the actual components of the webpage, such as text, images,
        containers, etc. A HTML document is represented using the document
        object model (DOM), which is a tree or structure of the objects in the
        HTML file.
      </P>

      <Image
        className="grid-item-thumbnail"
        src={html}
        alt="HTML DOM structure"
        placeholder="blur"
        loading="lazy"
      />
      <ImageCaption>
        Left: Example HTML, Right: DOM Structure of HTML
      </ImageCaption>

      <Heading as="h5" fontSize={17} mt={4}>
        CSS
      </Heading>
      <P>
        Cascading Style Sheets (CSS) defines the styling of the components on
        the page. This includes, but is not limited to, color, placement, fonts.
        Anything related to the presentation of the content is manipulated
        through CSS. Selectors target the HTML element, properties define the
        visual characteristic of the element, and values are assigned to the
        properties, specifying how they are applied to the element.
      </P>

      <Image
        className="grid-item-thumbnail"
        src={css}
        alt="CSS Rule"
        placeholder="blur"
        loading="lazy"
      />
      <ImageCaption>Example of a single CSS rule</ImageCaption>

      <Heading as="h5" fontSize={17} mt={4}>
        Cross-Platform Development
      </Heading>
      <P>
        Cross-platform development means producing a single application that can
        be deployed or used on multiple operating systems, such as iOS, Android
        or Windows. Previously, websites had to have 2 different versions; one
        for standard desktops and one for mobile devices. However, having 2
        separate websites comes with numerous disadvantages; it was
        time-consuming, expensive, difficult to manage, the list goes on. The
        same idea can be seen with mobile app development; they had to create
        one application for iOS users, and another for Android users. However,
        writing in the native code does enable for faster processing speeds and
        higher levels of efficiency.
      </P>

      <Heading as="h5" fontSize={17} mt={4}>
        React & React Native
      </Heading>
      <P>
        React is a modern JavaScript library that is used to construct websites
        and UI. React Native is a framework that enables cross-platform app
        development, by utilizing a single codebase. Developers write in
        JavaScript, and then the components are rendered on their native
        platform. It can even utilize the native UI components of those
        platforms. This is what makes React Native so powerful; only one
        codebase needs to be written, maintained, or updated, and it can work on
        the most popular operating systems in the world. No need for 2
        codebases!
      </P>
      <Box mt={2} />
      <P>
        React is incredibly efficient due to it usage of components. Components
        are a small piece if the user interface, such as the navigation bar.
        Components are reusable, so if they are needed in multiple sections of
        your webpage, they can be easily reused for less redundancy.The
        community behind React enables you to use third-party libraries in your
        workflow, allowing you to write more concise code that has greater
        functionality.
      </P>
      <Box mt={2} />
      <P>
        Additionally, React builds its own representation of the browser DOM in
        memory, called the Virtual DOM. When components are updated, React
        compares the virtual DOM to the browser DOM. It checks to see which
        components have updated, then React only changes the necessary
        components. The changes are then reflected in the browser DOM and then
        the webpage updates. This process is called reconciliation. This is far
        more efficient than updating the entire DOM everytime there is a change
        to a component, since updates only happen to updated components.
      </P>
      <Box mt={2} />
      <P>
        React Native allows for mobile developers to utilize one code base to
        publish an iOS and Android application. Instead of creating 2 code
        bases, one for the iOS version and one for the Android version,
        developers only need to maintain a single React Native code base. This
        significantly cuts resource costs and saves time, allowing developers to
        focus more on pushing out new features for the application.
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

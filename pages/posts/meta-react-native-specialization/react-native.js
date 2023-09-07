import { Box, Container, List, Link, Text, Code } from '@chakra-ui/react'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PostBigHeading,
  PostSmallHeading,
  ImageCaption,
  Title,
  CodeBox,
  IC,
  PostImage,
  TableOfContents,
  B
} from '../../../components/posts'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import certificate from '../../../public/images/posts/react-basics-cert.jpeg'
import { ELink } from '../../../components/home'

const title = 'React Native'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>{title}</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>
          React Native, React Native libraries, JavaScript and JSX
        </PostListItem>
        <PostListItem>Expo CLI, Android and iOS emulator</PostListItem>
        <PostListItem>
          React Native navigation, large lists, user input and interactivity
        </PostListItem>
      </List>
      <PostImage src={certificate} alt="certification" />
      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents title="Setup and Structure" />
      </List>

      <PostBigHeading>Introduction:</PostBigHeading>
      <P>
        In order to learn React Native, you must have a solid understanding of
        HTML, CSS, JavaScript, Node.js and npm. Knowing React would be an asset.
        React Native is built using JavaScript, and when building user
        interfaces (UI), HTML and CSS will be involved. Node.js and npm will be
        necessary to import and use other packages in your application. Packages
        are a collection of files that make up a module, which you can freely
        use in your application. If you are unfamiliar with HTML, CSS or
        JavaScript, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/intro-mobile-dev">
          post
        </ELink>
        . If you are unfamilar with Node.js or npm, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/program-javascript#node.js-&-npm">
          post
        </ELink>
        . If you wish to learn React, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/react-basics">
          post
        </ELink>
        .
      </P>
      <P>
        React Native, developed by Meta, is an open-source library that is
        widely used for mobile application development. It is popular due to its
        ability to utilize one codebase that works on both iOS and Android
        devices, using fully native components. The JavaScript is translated
        into the platform&apos;s native code, allowing for high performance and
        efficiency of the application.
      </P>
      <P>
        React Native saves time, costs, and allows for quicker development by
        utilizing one codebase. Instead of hiring 2 separate teams to develop a
        mobile app, only 1 team needs to be hired. This eliminates the need for
        constant communication between teams, and increases development of the
        application.
      </P>

      <PostSmallHeading>Setup and Structure</PostSmallHeading>
      <P>
        To get started with a React Native project, first install Node.js, the
        runtime environment for JavaScript. Bundled with node is npm, so there
        is no need for a separate installation. Visit the official website to
        download Node.js, at{' '}
        <ELink href="https://nodejs.org/en">www.nodejs.org</ELink>.
      </P>
      <P>
        The 2 most popular development environments for React Native is Expo Go
        and the React Native CLI. Expo Go is quicker and easier to work for
        beginners. If you are familiar with mobile development, perhaps try the
        React Native CLI development environment. For more information, visit
        the{' '}
        <ELink href="https://reactnative.dev/docs/environment-setup">
          official website
        </ELink>
        . This post will cover Expo Go, since it is more simple. Once installed,
        navigate to a directory you wish to have the app in. Then run{' '}
        <IC>npx create-expo-app appName</IC>, where <IC>appName</IC> is the name
        of your application. It will start building the React Native app in the{' '}
        <IC>appName</IC> folder it just created. Once it has finished building,
        run <IC>cd appName</IC> to go into the folder. Run{' '}
        <IC>npx expo start</IC> to run your application.
      </P>
      <P>
        An emulator simulates what the app experience is like on that mobile
        platform. It is incredibly useful because it mimics the user experience
        of your application on that desired platform without having to purchase
        the physical device. iOS emulators can only be run on macOS devices,
        whereas Android emulators can be run on any device. Expo Go also has the
        Metro Bundler, which bundles the JavaScript into native code. It
        provides a QR code that you can scan on your mobile device that will run
        the app.
      </P>
    </Container>
  </Layout>
)

export default Work

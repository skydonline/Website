import { Box, Container, List } from '@chakra-ui/react'
import Image from 'next/image'
import { ImageCaption, Title } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PSpacing,
  PostBigHeading,
  PostSmallHeading
} from '../../../components/posts'

const Work = () => (
  <Layout title="Programming with JavaScript">
    <Container>
      <Title>Programming with JavaScript</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>Role of a cross-platform mobile developer</PostListItem>
        <PostListItem>Fundamentals about React and React Native</PostListItem>
        <PostListItem>Basics of HTML and CSS</PostListItem>
      </List>

      <PostBigHeading>Content:</PostBigHeading>
      <P>
        Mobile development is crucial in the modern world, since so many people
        have mobile devices. We want to ensure that they have a great user
        experience on their device, regardless of operating system or device
        type.
      </P>
      <PSpacing />
      <P>
        The difficulty lies in creating a great application for both the web and
        mobile devices. We strive to have great UI/UX on both, but each
        application have various quirks about it, that force use to create
        different versions of the application depending on how the user is
        accessing it.
      </P>

      <PostSmallHeading>Web</PostSmallHeading>
      <P>
        A webpage is the document displayed on your screen, whereas a website is
        a collection of different webpages. Each webpage consists of 3 main
        technologies:<b> HTML, CSS and JavaScript</b>. HTML is the physical
        structure of the page (e.g. text, boxes), CSS is the styling of the
        physical structure (e.g. color, size), and JavaScript controls the user
        interaction (e.g. animations, dynamic UI).
      </P>
      <PSpacing />
      <P>
        A server, as the name implies, provides services and runs applications
        to other computers. These can be anything, such as websites or messaging
        apps. Web servers have numerous functions, and can respond to web
        requests from client (the person on another computer), by sending back a
        response that contains the website&apos;s content.
      </P>
      <PSpacing />
    </Container>
  </Layout>
)

export default Work

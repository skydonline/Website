import { Container, List } from '@chakra-ui/react'
import { B, ImageCaption, Title } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PostBigHeading,
  PostSmallHeading,
  PostImage,
  TableOfContents,
  CodeBox,
  IC
} from '../../../components/posts'

import certificate from '../../../public/images/posts/intro-mobile-dev-cert.jpeg'

const title = 'Programming In Python'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>{title}</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>
          Python, its syntax, modules, ecosystem, libraries and tools
        </PostListItem>
        <PostListItem>Error and exception handling</PostListItem>
        <PostListItem>Object-oriented programming concepts</PostListItem>
      </List>
      <PostBigHeading>WORK IN PROGRESS</PostBigHeading>
      {/*
      <PostImage src={certificate} alt="certification" />

      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents title="Web" />
      </List>

      <PostBigHeading>Introduction:</PostBigHeading>
*/}
    </Container>
  </Layout>
)

export default Work

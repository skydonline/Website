import { Container, Heading, List } from '@chakra-ui/react'
import { Title } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import { PostListItem } from '../../../components/list-item'

const Work = () => (
  <Layout title="Meta React Native Specialization">
    <Container>
      <Title>Introduction to Mobile Development</Title>

      <Heading as="h3" fontSize={20} mb={4}>
        About:
      </Heading>
      <P>
        Become a cross-platform mobile app developer. Learn in-demand skills for
        developing reliable, scalable and user-friendly mobile apps for multiple
        operating systems, such as iOS and Android.
      </P>

      <Heading as="h3" fontSize={20} mb={4} marginTop={6}>
        Main Learnings:
      </Heading>
      <List>
        <PostListItem>Role of a cross-platform mobile developer</PostListItem>
        <PostListItem>Fundamentals about React and React Native</PostListItem>
        <PostListItem>Basics of HTML and CSS</PostListItem>
      </List>
    </Container>
  </Layout>
)

export default Work

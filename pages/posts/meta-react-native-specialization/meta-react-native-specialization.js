import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Heading
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import Section from '../../../components/section'
import { PostGridItem } from '../../../components/grid-item'
import meta from '../../../public/images/posts/metaReactThumbnail.png'

const Work = () => (
  <Layout title="Meta React Native Specialization">
    <Container>
      <Title>
        Meta React Native Specialization <Badge>August 2023</Badge>
      </Title>
      <P>
        Become a cross-platform mobile app developer. Learn in-demand skills for
        developing reliable, scalable and user-friendly mobile apps for multiple
        operating systems, such as iOS and Android.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Course Link</Meta>
          <Link
            target="_blank"
            href="https://www.coursera.org/specializations/meta-react-native"
          >
            Coursera
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Instructor</Meta>
          Meta Staff
        </ListItem>

        <ListItem>
          <Meta>Skills</Meta>
          <span>
            React, React Native, JavaScript, UI/UX design, Mobile Development
          </span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={20} mb={4}>
        Sections
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <PostGridItem
            id="/meta-react-native-specialization/intro-mobile-dev"
            thumbnail={meta}
            title="Introduction to Mobile Development"
          >
            App & Mobile Development, React, HTML, CSS
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

import {
  Container,
  Badge,
  List,
  ListItem,
  SimpleGrid,
  Heading
} from '@chakra-ui/react'
import { Title, Meta } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import Section from '../../../components/section'
import { PostGridItem } from '../../../components/grid-item'

import introMobileDev from '../../../public/images/posts/intro-mobile-dev.png'
import programJavaScript from '../../../public/images/posts/program-javascript.png'
import versionControl from '../../../public/images/posts/version-control.png'
import reactBasics from '../../../public/images/posts/react-basics.png'
import reactNative from '../../../public/images/posts/react-native.png'
import { ELink } from '../../../components/home'

const title = 'Meta React Native Specialization'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>
        {title} <Badge>Aug &apos;23 - Current</Badge>
      </Title>
      <P>
        Become a cross-platform mobile app developer. Learn in-demand skills for
        developing reliable, scalable and user-friendly mobile apps for multiple
        operating systems, such as iOS and Android.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Course Link</Meta>
          <ELink href="https://www.coursera.org/specializations/meta-react-native">
            Coursera
          </ELink>
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
            thumbnail={introMobileDev}
            title="Introduction to Mobile Development"
          >
            App & Mobile Development, React, HTML, CSS
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="/meta-react-native-specialization/program-javascript"
            thumbnail={programJavaScript}
            title="Programming with JavaScript"
          >
            JavaScript, JavaScript technologies, Jest
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="/meta-react-native-specialization/version-control"
            thumbnail={versionControl}
            title="Version Control"
          >
            Version Control, Git, GitHub
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="/meta-react-native-specialization/react-basics"
            thumbnail={reactBasics}
            title="React Basics"
          >
            React, dynamic websites, component architecture
          </PostGridItem>
        </Section>

        <Section>
          <PostGridItem
            id="/meta-react-native-specialization/react-native"
            thumbnail={reactNative}
            title="React Native"
          >
            React Native
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

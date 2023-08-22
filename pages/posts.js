import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import network from '../public/images/projects/networkThumbnail.png'
import meta from '../public/images/posts/metaReactThumbnail.png'

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Certifications
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <PostGridItem
              id="/meta-react-native-specialization/meta-react-native-specialization"
              thumbnail={meta}
              title="Meta React Native Specialization"
            >
              React, React Native, JavaScript
            </PostGridItem>
          </Section>
          <Section>
            <PostGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </PostGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Other
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {/*
          <Section>
            <PostGridItem
              id="website-v1"
              thumbnail={website}
              title="Website V1"
            >
              My very first project, a personal website.
            </PostGridItem>
          </Section>
*/}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts

import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

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
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Experiences
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts

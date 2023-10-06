import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import metaReactNative from '../public/images/posts/metaReactThumbnail.png'
import robloxThumbnail from '../public/images/posts/robloxThumbnail.png'

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
              thumbnail={metaReactNative}
              title="Meta React Native Specialization"
            >
              React, React Native, JavaScript
            </PostGridItem>
          </Section>

          {/*
          <Section>
            <PostGridItem
              id="/meta-back-end-dev-specialization/meta-back-end-dev-specialization"
              thumbnail={metaBackEndDeveloper}
              title="Meta Back-End Developer Specialization"
            >
              React, React Native, JavaScript
            </PostGridItem>
          </Section>
  */}
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Experiences
          </Heading>
          <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
              <PostGridItem
                id="/experiences/roblox-swe-intern-2024"
                thumbnail={robloxThumbnail}
                title="Roblox SWE Intern 2024"
              >
                First SWE Interview Ever
              </PostGridItem>
            </Section>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts

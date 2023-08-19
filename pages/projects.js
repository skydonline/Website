import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import network from '../public/images/projects/networkThumbnail.png'
import website from '../public/images/projects/website-v1Thumbnail.png'
import pecunia from '../public/images/projects/pecuniaThumbnail.png'

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="pecunia" thumbnail={pecunia} title="Pecunia">
              A personal finance dashboard application that provides predictions
              on future income based on machine learning.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </WorkGridItem>
          </Section>

          {/*
          TEMPLATE, REMEMBER TO CREATE ACTUAL PAGE UNDERS pages/projects
          <Section>
            <WorkGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </WorkGridItem>
          </Section>
  */}
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="website-v1"
              thumbnail={website}
              title="Website V1"
            >
              My very first project, a personal website.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects

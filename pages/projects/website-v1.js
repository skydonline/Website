import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ELink } from '../../components/home'

const title = 'Website V1'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>
        {title} <Badge>April 2023</Badge>
      </Title>
      <P>
        My very first project, a personal website. Included interactive
        components, engaging features, and adapted to various screen sizes.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <ELink href="https://github.com/skydonline/skydonline.github.io">
            GitHub Repository
          </ELink>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, React, Bootstrap, HTML, CSS</span>
        </ListItem>

        <ListItem>
          <Meta>Concepts</Meta>
          <span>Responsive Web Design</span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/website-v1-1.png" alt="Website-V1" />
      <WorkImage src="/images/projects/website-v1-2.png" alt="Website-V1" />
      <WorkImage src="/images/projects/website-v1-3.png" alt="Website-V1" />
    </Container>
  </Layout>
)

export default Work

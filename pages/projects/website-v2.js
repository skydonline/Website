import { Container, Badge, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ELink } from '../../components/home'

const title = 'Website V2'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>
        {title} <Badge>Aug &apos;23 - Current</Badge>
      </Title>
      <P>
        A new personal website, designed to showcase my portfolio and document
        my learnings. Some projects have YouTube videos to go along with them,
        to demonstrate the project. My learnings can be freely accessed under
        the &quot;Posts&quot; section.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <ELink href="https://github.com/skydonline/Website">
            GitHub Repository
          </ELink>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, React, Node.js, Next.js, HTML, CSS</span>
        </ListItem>

        <ListItem>
          <Meta>Concepts</Meta>
          <span>UI/UX Design, Responsive Web Design</span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/website-v1-1.png" alt="Website-V2" />
      <WorkImage src="/images/projects/website-v1-2.png" alt="Website-V2" />
      <WorkImage src="/images/projects/website-v1-3.png" alt="Website-V2" />
    </Container>
  </Layout>
)

export default Work

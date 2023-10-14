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

import programInPython from '../../../public/images/posts/program-in-python.png'
import { ELink } from '../../../components/home'

const title = 'Meta Back-End Developer Specialization'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>
        {title} <Badge>Sept &apos;23 - Current</Badge>
      </Title>
      <P>
        Launch your career as a back-end developer. Build job-ready skills for
        an in-demand career and earn a credential from Meta. No degree or prior
        experience required to get started.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Course Link</Meta>
          <ELink href="https://www.coursera.org/professional-certificates/meta-back-end-developer">
            Coursera
          </ELink>
        </ListItem>

        <ListItem>
          <Meta>Instructor</Meta>
          Meta Staff
        </ListItem>

        <ListItem>
          <Meta>Skills</Meta>
          <span>Python, SQL, REST APIs, JavaScript, Linux</span>
        </ListItem>
      </List>

      <Heading as="h3" fontSize={20} mb={4}>
        Sections
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <PostGridItem
            id="meta-back-end-dev-specialization/program-in-python"
            thumbnail={programInPython}
            title="Programming In Python"
          >
            Python
          </PostGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work

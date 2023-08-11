import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pecunia">
    <Container>
      <Title>
        Pecunia <Badge>August 2023</Badge>
      </Title>
      <P>WORK IN PROGRESS</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <Link target="_blank" href="https://github.com/skydonline/Pecunia">
            GitHub Repository
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Node.js, Express.js, Vite.js, MongoDB, Redux Toolkit, Materials UI
          </span>
        </ListItem>
        <ListItem>
          <Meta>Concepts</Meta>
          <span>
            Machine Learning, REST APIs, Responsive Web Design, Data Privacy and
            Security
          </span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work

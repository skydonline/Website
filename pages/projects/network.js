import { Container, Badge, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ELink } from '../../components/home'

const Work = () => (
  <Layout title="Network">
    <Container>
      <Title>
        Social Media Network <Badge>July 2023</Badge>
      </Title>
      <P>
        A mock social media network, where people can share, interact, and
        engage with other users.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <ELink href="https://github.com/skydonline/cs50/tree/main/cs50w/project4">
            GitHub Repository
          </ELink>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Django, Python, JavaScript, Bootstrap, HTML/CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Concepts</Meta>
          <span>
            REST APIs, Responsive Web Design, User Authentication, Data Privacy
            and Security
          </span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/rjhiqYT8x7E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work

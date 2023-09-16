import { Container, Badge, List, ListItem, AspectRatio } from '@chakra-ui/react'
import { Title, Meta } from '../../components/projects'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ELink } from '../../components/home'

const title = 'Pecunia'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>
        {title} <Badge>August 2023</Badge>
      </Title>
      <P>
        An interactive financial dashboard that connects the user&apos;s bank
        account. Shows predictions for future income based on last years income,
        based on a machine learning linear regression model.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source Code</Meta>
          <ELink href="https://github.com/skydonline/Pecunia">
            GitHub Repository
          </ELink>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            MongoDB, Express.js, React (Material UI & Recharts), Node.js
          </span>
        </ListItem>
        <ListItem>
          <Meta>Concepts</Meta>
          <span>
            Machine Learning, REST APIs, Responsive Web Design, Data Structures
            and Algorithms, Data Management, Privacy, Security and
            Visualization/Modeling
          </span>
        </ListItem>
      </List>

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/p6HZU5rYd-8"
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

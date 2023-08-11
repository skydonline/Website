import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Pecunia">
    <Container>
      <Title>
        Pecunia <Badge>August 2023</Badge>
      </Title>
      <P>WORK IN PROGRESS</P>
      <List ml={4} my={4}>
        {/*
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
  
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.inkdrop.app/">
              https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
  */}

        <ListItem>
          <Meta>Source Code</Meta>
          <Link
            target="_blank"
            href="https://github.com/skydonline/cs50/tree/main/cs50w/project4"
          >
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

      {/*<WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
       */}

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
);

export default Work;

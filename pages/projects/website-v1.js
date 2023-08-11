import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  SimpleGrid,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Website V1">
    <Container>
      <Title>
        Website V1 <Badge>April 2023</Badge>
      </Title>
      <P>
        My very first project, a personal website. Included interactive
        components, engaging features, and adapted to various screen sizes.
      </P>
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
            href="https://github.com/skydonline/skydonline.github.io"
          >
            GitHub Repository
            <ExternalLinkIcon mx="2px" />
          </Link>
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

      <WorkImage src="/images/projects/website-v1-1.mov" alt="Website-V1" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/projects/website-v1-2.gif" alt="Website-V1" />
        <WorkImage src="/images/projects/website-v1-3.gif" alt="Website-V1" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;

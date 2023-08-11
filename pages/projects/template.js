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
import { Title, Meta, WorkImage } from "../../components/projects";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Network">
    {/* CHANGE NAME OF TITLE*/}
    <Container>
      <Title>
        PROJECT NAME <Badge>PROJECT DATE</Badge>
      </Title>
      <P>PROJECT DESCRIPTION</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>

        {/* change link href */}
        <ListItem>
          <Meta>External Link Name</Meta>
          <Link href="">
            Name of link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

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

      {/* singular big image */}
      <WorkImage src="/images/projects/pecuniaThumbnail.png" alt="Pecunia" />

      {/* for multiple images in a row */}
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/projects/website-v1-2.gif" alt="Website-V1" />
        <WorkImage src="/images/projects/website-v1-3.gif" alt="Website-V1" />
      </SimpleGrid>

      {/* embedded YouTube player */}
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

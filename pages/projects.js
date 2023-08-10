import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import network from "../public/images/projects/networkThumbnail.png";
import Layout from "../components/layouts/article";

const Projects = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="network" thumbnail={network} title="Network">
              Developed a social media network, similar to Instagram.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Projects;

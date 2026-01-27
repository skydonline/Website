import {
  Container,
  Heading,
  Divider,
  SimpleGrid,
  GridItem,
  Box
} from '@chakra-ui/react'
import { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Valentines = () => {
  const [noCount, setNoCount] = useState(1)

  const yesSize = Math.min(6 + noCount * 2, 48)

  const handleNoClick = () => {
    setNoCount(noCount + 2)
  }

  const handleYesClick = () => {
    alert('Yay! I love you! 💕')
  }

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Valentines
        </Heading>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Hi there baby! Will you be my Valentine? &lt;3
          </Heading>

          <SimpleGrid columns={2} gap={6}>
            <GridItem colSpan={{ base: 1, md: 2 }}>
              <Box
                fontSize={yesSize}
                px={yesSize}
                py={yesSize}
                onClick={handleYesClick}
                backgroundColor="green.500"
                color="white"
                fontWeight="bold"
                borderRadius="md"
                display="inline-block"
                transition="all 0.2s"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                _hover={{
                  cursor: 'pointer',
                  backgroundColor: 'green.600',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-2px)'
                }}
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                YES!!!
              </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 1 }}>
              <Box
                onClick={handleNoClick}
                backgroundColor="red.500"
                color="white"
                fontWeight="bold"
                borderRadius="md"
                px={6}
                py={3}
                display="inline-block"
                transition="all 0.2s"
                boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                _hover={{
                  cursor: 'pointer',
                  backgroundColor: 'red.600',
                  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-2px)'
                }}
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                No ({(noCount - 1) / 2})
              </Box>
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Valentines

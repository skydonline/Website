import { Container, Heading, Divider, Box } from '@chakra-ui/react'
import { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'

const Valentines = () => {
  const [noClicks, setNoClicks] = useState(0)
  const [noScale, setNoScale] = useState(1)
  const [yesScale, setYesScale] = useState(1)
  const [gap, setGap] = useState(24)

  const maxNoClicks = 4
  const minNoScale = 0.65
  const maxYesWidth = 400
  const baseYesWidth = 100

  const noButtonMessages = [
    'Will you be my Valentine?',
    'Are you sure??',
    'Pookie please',
    'Pookie PLEASE',
    "You can't do this to me!"
  ]

  const handleNoClick = () => {
    if (noClicks < maxNoClicks) {
      // Shrink No button
      const newNoScale = Math.max(noScale - 0.1, minNoScale)
      setNoScale(newNoScale)

      // Grow Yes button
      const scaledYesWidth = baseYesWidth * yesScale
      if (scaledYesWidth < maxYesWidth) {
        const newYesScale = yesScale + 0.5
        setYesScale(newYesScale)

        // Adjust gap dynamically
        const gapScaleFactor = 250
        const newGap = Math.sqrt(gap * gapScaleFactor)
        setGap(newGap)
      }
    }

    setNoClicks(noClicks + 1)
  }

  const handleYesClick = () => {
    alert('Yay! I love you! 💕')
  }

  const currentNoMessage = noButtonMessages[noClicks % maxNoClicks]

  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Valentines
        </Heading>

        <Section delay={0.4}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={20}>
            Hi there baby! Will you be my Valentine? &lt;3
          </Heading>

          <Box
            display="flex"
            gap={`${gap}px`}
            mt={8}
            alignItems="center"
            flexWrap="wrap"
          >
            <Box
              onClick={handleYesClick}
              backgroundColor="green.500"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              px={6}
              py={3}
              transition="all 0.2s"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              transform={`scale(${yesScale})`}
              transformOrigin="left center"
              _hover={{
                cursor: 'pointer',
                backgroundColor: 'green.600',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
              }}
              _active={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              YES!!!
            </Box>

            <Box
              onClick={handleNoClick}
              backgroundColor="red.500"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              px={6}
              py={3}
              transition="all 0.2s"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              transform={`scale(${noScale})`}
              transformOrigin="right center"
              _hover={{
                cursor: 'pointer',
                backgroundColor: 'red.600',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)'
              }}
              _active={{
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              {currentNoMessage}
            </Box>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Valentines

import {
  Container,
  Heading,
  Divider,
  Box,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import CustomModal from '../components/custom-modal'
import MemoryLane from '../components/memory-lane'

const Valentines = () => {
  const [noClicks, setNoClicks] = useState(0)
  const [noScale, setNoScale] = useState(1)
  const [yesScale, setYesScale] = useState(1)
  const [gap, setGap] = useState(24)
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 })
  const { isOpen, onOpen, onClose } = useDisclosure()

  const maxNoClicks = 4
  const minNoScale = 0.65
  const maxYesWidth = 400
  const baseYesWidth = 100

  const noButtonMessages = [
    'No way!',
    'Are you sure??',
    'Baby please',
    'BABY PLEASE',
    "You can't do this to me!"
  ]

  const getRandomPosition = () => {
    const randomTop = Math.random() * (window.innerHeight - 100)
    const randomLeft = Math.random() * (window.innerWidth - 150)
    return { top: randomTop, left: randomLeft }
  }

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

    // Move button to random position
    setNoPosition(getRandomPosition())
    setNoClicks(noClicks + 1)
  }

  const handleYesClick = () => {
    onOpen()
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

          <MemoryLane />

          <Heading as="h3" fontSize={20} mb={20}>
            Will you be my Valentine? &lt;3
          </Heading>

          <Box
            display="flex"
            gap={`${gap}px`}
            alignItems="center"
            justifyContent="center"
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
              m={0}
              transition="all 0.2s"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              transform={`scale(${yesScale})`}
              transformOrigin="center"
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
          </Box>

          <Box
            position="fixed"
            top={`${noPosition.top}px`}
            left={`${noPosition.left}px`}
            zIndex={9999}
          >
            <Box
              onClick={handleNoClick}
              backgroundColor="red.500"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              px={6}
              py={3}
              m={0}
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

      <CustomModal
        title="Happy Valentines Baby!!! 💕"
        message="See you February 14th! 🤍"
        isOpen={isOpen}
        onClose={onClose}
      />
    </Layout>
  )
}

export default Valentines

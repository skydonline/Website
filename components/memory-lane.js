import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Badge,
  Flex
} from '@chakra-ui/react'
import { useState } from 'react'

// Placeholder memory images as SVG
const MemoryPlaceholder = ({ title, emoji, bgColor }) => (
  <Flex
    w="100%"
    h="100%"
    align="center"
    justify="center"
    bg={bgColor}
    direction="column"
    gap={2}
  >
    <Box fontSize="48px">{emoji}</Box>
    <Text fontSize="xs" color="white" fontWeight="bold" textAlign="center">
      {title}
    </Text>
  </Flex>
)

const DEFAULT_MEMORIES = [
  {
    image: '/images/valentines/photo1.jpg',
    date: 'Nov. 23, 2025',
    title: 'The Beginning',
    description: 'Our first moment together. A memory I will always cherish.'
    // tags: ['2024', 'First']
  },
  {
    image: '/images/valentines/photo2.jpg',
    date: 'Nov. 25, 2025',
    title: 'First Flowers',
    description:
      'The day I surprised you with flowers. Learned about your love for them.'
    // tags: ['First Date', 'Adventure']
  },
  {
    image: '/images/valentines/photo3.jpg',
    date: 'Dec. 3, 2025',
    title: 'Girlfriend Proposal',
    description: 'That special moment when I asked to be your boyfriend.'
    // tags: ['Summer', 'Adventure']
  },
  {
    image: '/images/valentines/photo4.jpg',
    date: 'Cozy Nights',
    title: 'Quiet Moments',
    description:
      'The simple moments are often the best. Your company is all I ever need.'
    // tags: ['Quality Time', 'Together']
  },
  {
    image: '/images/valentines/photo5.jpg',
    date: 'Recent',
    title: 'Us Right Now',
    description:
      "And here we are. Ready to spend Valentine's Day and every day after with you."
    // tags: ['Love', 'Future']
  },
  {
    image: '/images/valentines/photo6.MP4',
    date: 'Recent',
    title: 'Us Right Now',
    description:
      "And here we are. Ready to spend Valentine's Day and every day after with you."
    // tags: ['Love', 'Future']
  },
  {
    image: '/images/valentines/photo7.jpg',
    date: 'Recent',
    title: 'Us Right Now',
    description:
      "And here we are. Ready to spend Valentine's Day and every day after with you."
    // tags: ['Love', 'Future']
  },
  {
    image: '/images/valentines/photo8.jpg',
    date: 'Jan 5. 2026',
    title: 'Leaving for Boston',
    description:
      "And here we are. Ready to spend Valentine's Day and every day after with you."
    // tags: ['Love', 'Future']
  }
]

const MemoryLane = ({ memories = DEFAULT_MEMORIES }) => {
  const [selectedMemory, setSelectedMemory] = useState(null)

  return (
    <VStack spacing={6} align="stretch" my={12}>
      <Heading as="h3" fontSize={18} mb={4}>
        Memory Lane 🎞️
      </Heading>

      {/* Scrollable gallery */}
      <Box
        overflowX="auto"
        pb={4}
        css={{
          '&::-webkit-scrollbar': {
            height: '8px'
          },
          '&::-webkit-scrollbar-track': {
            background: '#f1f1f1',
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#888',
            borderRadius: '10px'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#555'
          }
        }}
      >
        <HStack spacing={4} minW="min-content" px={2}>
          {memories.map((memory, index) => (
            <Box
              key={index}
              onClick={() =>
                setSelectedMemory(selectedMemory === index ? null : index)
              }
              position="relative"
              borderRadius="lg"
              overflow="hidden"
              flexShrink={0}
              w={200}
              h={200}
              cursor="pointer"
              transition="all 0.3s"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              _hover={{
                boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
                transform: 'scale(1.05)'
              }}
              bg="gray.100"
            >
              {memory.image ? (
                <Image
                  src={memory.image}
                  alt={memory.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              ) : (
                <MemoryPlaceholder
                  title={memory.title}
                  emoji={memory.emoji}
                  bgColor={memory.bgColor}
                />
              )}

              {/* Overlay on hover */}
              <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="blackAlpha.600"
                display="flex"
                alignItems="flex-end"
                p={3}
                opacity={0}
                transition="opacity 0.3s"
                _groupHover={{
                  opacity: 1
                }}
              >
                <Text fontSize="sm" color="white" fontWeight="bold">
                  {memory.date}
                </Text>
              </Box>
            </Box>
          ))}
        </HStack>
      </Box>

      {/* Selected memory details */}
      {selectedMemory !== null && (
        <Box
          bg="blue.50"
          p={6}
          borderRadius="lg"
          borderLeft="4px solid"
          borderColor="blue.500"
          animation="fadeIn 0.3s"
        >
          <HStack mb={3}>
            <Badge colorScheme="blue" fontSize="sm">
              {memories[selectedMemory].date}
            </Badge>
            {memories[selectedMemory].tags?.map((tag, i) => (
              <Badge
                key={i}
                colorScheme="purple"
                fontSize="sm"
                variant="outline"
              >
                {tag}
              </Badge>
            ))}
          </HStack>

          <Heading as="h4" fontSize={16} mb={2}>
            {memories[selectedMemory].title}
          </Heading>

          <Text color="gray.700">{memories[selectedMemory].description}</Text>
        </Box>
      )}
    </VStack>
  )
}

export default MemoryLane

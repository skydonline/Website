import {
  Box,
  Text,
  VStack,
  useDisclosure,
  Button,
  keyframes
} from '@chakra-ui/react'
import { useState } from 'react'

const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`

const TypewriterText = ({ text, delay = 0 }) => {
  return (
    <Text
      as="span"
      animation={`${typewriter} 2s steps(${text.length}, end) ${delay}s both`}
      whiteSpace="nowrap"
      overflow="hidden"
    >
      {text}
    </Text>
  )
}

const LoveLetters = () => {
  const [revealedLetters, setRevealedLetters] = useState(new Set())

  const letters = [
    {
      id: 1,
      title: 'Letter #1',
      emoji: '💌',
      content:
        "From the moment I met you, I knew you were special. Every day with you has been a gift, and I cannot wait to spend many more Valentine's Days with you."
    },
    {
      id: 2,
      title: 'Letter #2',
      emoji: '💕',
      content:
        'Your smile brightens my day, your laugh is my favorite sound, and your love means everything to me. Thank you for being you.'
    },
    {
      id: 3,
      title: 'Letter #3',
      emoji: '🌹',
      content:
        'I love the way you make me feel. You bring out the best in me and inspire me every single day. I am so grateful for you.'
    },
    {
      id: 4,
      title: 'Letter #4',
      emoji: '✨',
      content:
        'Being with you feels like coming home. You are my favorite person, my best friend, and my soulmate. I love you endlessly.'
    }
  ]

  const toggleLetter = id => {
    setRevealedLetters(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <VStack spacing={6} my={12} w="100%">
      <Text fontSize="lg" fontWeight="bold">
        Love Letters 💌
      </Text>
      <VStack spacing={3} w="100%">
        {letters.map(letter => (
          <Box
            key={letter.id}
            w="100%"
            p={4}
            bg={revealedLetters.has(letter.id) ? 'pink.50' : 'gray.50'}
            border="2px"
            borderColor={
              revealedLetters.has(letter.id) ? 'pink.300' : 'gray.200'
            }
            borderRadius="lg"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{
              borderColor: 'pink.400',
              boxShadow: '0 4px 12px rgba(245, 105, 145, 0.2)'
            }}
            onClick={() => toggleLetter(letter.id)}
          >
            <Text fontWeight="bold" mb={2}>
              {letter.emoji} {letter.title}
            </Text>
            {revealedLetters.has(letter.id) && (
              <Text fontSize="sm" color="gray.700" lineHeight="tall">
                {letter.content}
              </Text>
            )}
            {!revealedLetters.has(letter.id) && (
              <Text fontSize="sm" color="gray.500" fontStyle="italic">
                Click to read...
              </Text>
            )}
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}

export default LoveLetters

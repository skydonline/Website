import { Box, keyframes } from '@chakra-ui/react'

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => i)

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100%"
      h="100%"
      pointerEvents="none"
      overflow="hidden"
      zIndex={0}
    >
      {hearts.map(i => (
        <Box
          key={i}
          position="absolute"
          fontSize={{ base: '20px', md: '30px' }}
          opacity={0.1}
          animation={`${float} ${3 + i * 0.5}s ease-in-out infinite`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.2}s`
          }}
        >
          {['❤️', '💕', '💖', '💗', '💝'][i % 5]}
        </Box>
      ))}
    </Box>
  )
}

export default FloatingHearts

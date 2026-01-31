import { Box, Text, VStack, HStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateCountdown = () => {
      const valentinesDay = new Date(2026, 1, 14, 0, 0, 0).getTime()
      const now = new Date().getTime()
      const distance = valentinesDay - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    calculateCountdown()
    const timer = setInterval(calculateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  const TimeBox = ({ value, label }) => (
    <VStack spacing={1}>
      <Box
        bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        color="white"
        fontWeight="bold"
        fontSize="24px"
        w={16}
        h={16}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="lg"
        boxShadow="0 4px 15px rgba(245, 87, 108, 0.4)"
      >
        {String(value).padStart(2, '0')}
      </Box>
      <Text fontSize="xs" fontWeight="bold" color="gray.600">
        {label}
      </Text>
    </VStack>
  )

  return (
    <VStack spacing={4} my={8}>
      <Text fontSize="lg" fontWeight="bold" color="gray.700">
        Time until Valentine's Day 💕
      </Text>
      <HStack spacing={4} justify="center">
        <TimeBox value={timeLeft.days} label="Days" />
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </HStack>
    </VStack>
  )
}

export default CountdownTimer

import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Icon,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'

const ValentinesDayAgenda = () => {
  const [expandedActivity, setExpandedActivity] = useState(null)

  const activities = [
    {
      id: 1,
      time: '10:00 AM',
      title: 'Breakfast in Bed',
      emoji: '🥐',
      details: 'Start the day with your favorite breakfast and cuddles'
    },
    {
      id: 2,
      time: '12:00 PM',
      title: 'Movie Marathon',
      emoji: '🎬',
      details: 'Cozy up and watch romantic movies together'
    },
    {
      id: 3,
      time: '3:00 PM',
      title: 'Sunset Walk',
      emoji: '🌅',
      details: 'Take a romantic walk and enjoy the beautiful scenery'
    },
    {
      id: 4,
      time: '6:00 PM',
      title: 'Dinner Out',
      emoji: '🍽️',
      details: 'Enjoy a delicious dinner at your favorite restaurant'
    },
    {
      id: 5,
      time: '8:00 PM',
      title: 'Stargazing',
      emoji: '⭐',
      details: 'Look at the stars and make a wish together'
    },
    {
      id: 6,
      time: '10:00 PM',
      title: 'Dessert & Music',
      emoji: '🎵',
      details: 'End the day with treats and slow dancing to your favorite songs'
    }
  ]

  return (
    <VStack spacing={6} my={12} w="100%">
      <Heading as="h3" fontSize={20} color="red.500">
        Our Valentine's Day Plan 💝
      </Heading>

      <VStack spacing={3} w="100%">
        {activities.map(activity => (
          <Box
            key={activity.id}
            w="100%"
            p={4}
            bg="linear-gradient(135deg, rgba(255, 182, 193, 0.3) 0%, rgba(255, 192, 203, 0.3) 100%)"
            border="2px"
            borderColor="pink.200"
            borderRadius="lg"
            cursor="pointer"
            transition="all 0.3s"
            _hover={{
              boxShadow: '0 6px 20px rgba(245, 87, 108, 0.2)',
              transform: 'translateY(-2px)',
              borderColor: 'pink.400'
            }}
            onClick={() =>
              setExpandedActivity(
                expandedActivity === activity.id ? null : activity.id
              )
            }
          >
            <HStack justify="space-between" w="100%">
              <HStack flex={1}>
                <Text fontSize="24px">{activity.emoji}</Text>
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold" color="pink.700">
                    {activity.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {activity.time}
                  </Text>
                </VStack>
              </HStack>
              <Text fontSize="20px" color="pink.400">
                {expandedActivity === activity.id ? '−' : '+'}
              </Text>
            </HStack>

            {expandedActivity === activity.id && (
              <Text mt={3} fontSize="sm" color="gray.700" pl={10}>
                {activity.details}
              </Text>
            )}
          </Box>
        ))}
      </VStack>
    </VStack>
  )
}

export default ValentinesDayAgenda

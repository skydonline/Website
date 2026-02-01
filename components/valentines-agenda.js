import { Box, Heading, VStack, HStack, Text } from '@chakra-ui/react'
import { useState } from 'react'

const ValentinesDayAgenda = () => {
  const [expandedActivity, setExpandedActivity] = useState(null)

  const activities = [
    {
      id: 1,
      time: '11:00 AM',
      title: 'Flowers & Gifts',
      emoji: '💐',
      details: 'Start the day with flowers and gifts for the lovely girl!'
    },
    {
      id: 2,
      time: '12:00 PM',
      title: 'Home Cooked Meal',
      emoji: '🍱',
      details: 'Cook a special meal together at home!'
    },
    {
      id: 3,
      time: '5:45 PM',
      title: 'Dinner',
      emoji: '🍽️',
      details: 'Enjoy a delicious dinner at Nobu!'
    },
    {
      id: 4,
      time: '8:00 PM',
      title: 'Photobooth',
      emoji: '📸',
      details: 'Take cute photos together @ Photoism!'
    },
    {
      id: 5,
      time: '10:00 PM',
      title: 'Bar Hop',
      emoji: '🍸',
      details: 'Visit bars for drinks and fun!'
    }
  ]

  return (
    <VStack spacing={6} my={12} w="100%">
      <Heading as="h3" fontSize={20} color="red.500">
        Our Valentine&apos;s Day Plan 💝
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

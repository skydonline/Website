import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  ListItem,
  ListIcon,
  Text
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextImage from 'next/image'

export const Title = ({ children }) => (
  <Box>
    <NextLink passHref href="/posts">
      <Link>Posts</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const PostListItem = ({ children }) => (
  <ListItem>
    <ListIcon as={ChevronRightIcon} />
    {children}
  </ListItem>
)

export const ImageCaption = ({ children }) => (
  <Box width="100%" textAlign="center">
    <Text as="i" fontSize={12}>
      {children}
    </Text>
  </Box>
)

export const PSpacing = () => <Box mt={2} />

export const PostBigHeading = ({ children }) => (
  <Heading as="h3" fontSize={20} mb={4} mt={6}>
    {children}
  </Heading>
)

export const PostSmallHeading = ({ children }) => (
  <Heading as="h5" fontSize={17} mt={4}>
    {children}
  </Heading>
)

export const PostImage = ({ src, alt }) => (
  <Box mt={6}>
    <NextImage
      className="grid-item-thumbnail"
      src={src}
      alt={alt}
      placeholder="blur"
      loading="lazy"
    />
  </Box>
)

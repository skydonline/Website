import { ChevronRightIcon } from '@chakra-ui/icons'
import { Button, Link, ListIcon, ListItem, Icon } from '@chakra-ui/react'

export const PostListItem = ({ children }) => (
  <ListItem>
    <ListIcon as={ChevronRightIcon} />
    {children}
  </ListItem>
)

export const SocialListItem = ({ link, icon, children }) => (
  <ListItem>
    <Link target="_blank" href={link}>
      <Button leftIcon={<Icon as={icon} />} colorScheme="teal" variant="ghost">
        {children}
      </Button>
    </Link>
  </ListItem>
)

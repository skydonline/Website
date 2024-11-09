import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Link, ListItem, Icon, Spacer, Tooltip } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'
import Paragraph from './paragraph'

// Social Media Icon
export const SocialListItem = ({ link, icon, children }) => (
  <ListItem>
    <Link target="_blank" href={link}>
      <Button leftIcon={<Icon as={icon} />} colorScheme="teal" variant="ghost">
        {children}
      </Button>
    </Link>
  </ListItem>
)

// Experience Item
export const BioItem = ({ title, date }) => (
  <BioSection>
    {title}
    <Spacer />
    <BioYear>{date}</BioYear>
  </BioSection>
)

// External link, opens in new tab and has icon
export const ELink = ({ children, href }) => (
  <Link href={href} target="_blank">
    {children}
    <ExternalLinkIcon mx="2px" />
  </Link>
)

export const Tech = ({ name, icon }) => (
  <Tooltip label={name} aria-label={name} p={1}>
    <span>
      <Icon as={icon} w={10} h={10} />
    </span>
  </Tooltip>
)

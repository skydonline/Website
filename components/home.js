import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Link, ListItem, Icon, Spacer } from '@chakra-ui/react'
import { BioSection, BioYear } from './bio'

export const SocialListItem = ({ link, icon, children }) => (
  <ListItem>
    <Link target="_blank" href={link}>
      <Button leftIcon={<Icon as={icon} />} colorScheme="teal" variant="ghost">
        {children}
      </Button>
    </Link>
  </ListItem>
)

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

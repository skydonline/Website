import { Box, Button, useColorMode } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const { colorMode } = useColorMode()
  const buttonColor = colorMode === 'dark' ? '#3a404d' : 'white'

  return (
    <Box
      position="fixed"
      bottom="2rem"
      right="2rem"
      display="none"
      opacity="0.8"
      _hover={{ opacity: 1 }}
      id="backToTopButton"
    >
      <Button style={{ backgroundColor: buttonColor }} onClick={scrollToTop}>
        <ArrowUpIcon />
      </Button>
    </Box>
  )
}

export default BackToTopButton

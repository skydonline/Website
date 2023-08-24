import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <>
      <Box mt={10} align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Sky Deng. All Rights Reserved.
      </Box>

      <Box align="center" opacity={0.4} fontSize="sm">
        Inspired by{' '}
        <Link href="https://www.craftz.dog/" target="_blank">
          Takuya Matsuyama
        </Link>
      </Box>

      <Box align="center" opacity={0.4} fontSize="sm">
        3D Voxel Model:{' '}
        <Link
          href="https://sketchfab.com/3d-models/voxel-world-9fbc3f1c776f4282ab55f7f14811fe79"
          target="_blank"
        >
          cmzw{' '}
        </Link>
        under{' '}
        <Link
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
        >
          CC License 4.0{' '}
        </Link>
      </Box>
    </>
  )
}

export default Footer

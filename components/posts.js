import { useState } from 'react'
import NextLink from 'next/link'
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  ListItem,
  ListIcon,
  Text,
  Code,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
  useClipboard
} from '@chakra-ui/react'
import { ChevronRightIcon, CopyIcon, CheckIcon } from '@chakra-ui/icons'
import NextImage from 'next/image'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

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

export const TableOfContents = ({ link, title }) => (
  <PostListItem>
    <Link href={`#${link}`}>{title}</Link>
  </PostListItem>
)

export const ImageCaption = ({ children }) => (
  <Box width="100%" textAlign="center">
    <Text as="i" fontSize={12}>
      {children}
    </Text>
  </Box>
)

export const PostBigHeading = ({ children }) => (
  <Heading as="h3" fontSize={20} mb={4} mt={6}>
    {children}
  </Heading>
)

export const PostSmallHeading = ({ children, id }) => (
  <Heading id={id} as="h5" fontSize={17} mt={4}>
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

// IC shrot for "inline code", to make code cleaner
export const IC = ({ children }) => (
  <Code style={{ textIndent: '0' }}>{children}</Code>
)

// Source: https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme
export const CodeBox = ({ language, children }) => {
  const [isCopied, setIsCopied] = useState(false)
  const { onCopy } = useClipboard(children)

  const handleCopy = () => {
    onCopy()
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <Box mt={2} mb={2}>
      <Box
        backgroundColor="#3a404d"
        maxWidth="200%"
        minWidth="25rem"
        height="auto"
        borderRadius="0.375rem"
        overflow="hidden"
      >
        <Box
          display="flex"
          alignItems="center"
          color="white"
          justifyContent="space-between"
          fontSize="0.75rem"
          paddingLeft="1rem"
          paddingRight="1rem"
        >
          <Text fontWeight="bold" fontSize="0.875rem">
            {language}
          </Text>
          <Button
            size="sm"
            paddingY="0.25rem"
            paddingX="0.5rem"
            display="inline-flex"
            gap="0.25rem"
            alignItems="center"
            onClick={handleCopy}
          >
            {isCopied ? (
              <CheckIcon boxSize="1em" />
            ) : (
              <CopyIcon boxSize="1.25em" />
            )}
            {isCopied ? 'Copied!' : 'Copy Code'}
          </Button>
        </Box>
        <SyntaxHighlighter
          customStyle={{ padding: '20px' }}
          language={language}
          style={nightOwl}
          wrapLongLines={true}
        >
          {children}
        </SyntaxHighlighter>
      </Box>
    </Box>
  )
}

const headerCellStyle = {
  border: '2px solid',
  textAlign: 'center',
  fontSize: '14px',
  textTransform: 'none'
}

const dataCellStyle = {
  borderBottom: '1px solid',
  borderLeft: '1px solid',
  borderRight: '1px solid',
  textAlign: 'center',
  textTransform: 'none'
}

export const DataTypesTable = () => (
  <TableContainer mt={4}>
    <Table>
      <Thead>
        <Tr>
          <Th style={headerCellStyle}>Data Type</Th>
          <Th style={headerCellStyle}>Examples</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Th style={dataCellStyle}>String</Th>
          <Th style={dataCellStyle}>
            &quot;Hello, World!&quot;, &quot;JavaScript&quot;
          </Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>Number</Th>
          <Th style={dataCellStyle}>1, 2.3</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>Boolean</Th>
          <Th style={dataCellStyle}>true, false</Th>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
)

export const OperatorTable = () => (
  <TableContainer mt={4}>
    <Table>
      <Thead>
        <Tr>
          <Th style={headerCellStyle}>Operator</Th>
          <Th style={headerCellStyle}>Meaning</Th>
          <Th style={headerCellStyle}>Example</Th>
          <Th style={headerCellStyle}>Result</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Th style={dataCellStyle}>+</Th>
          <Th style={dataCellStyle}>Addition</Th>
          <Th style={dataCellStyle}>1 + 1</Th>
          <Th style={dataCellStyle}>2</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>-</Th>
          <Th style={dataCellStyle}>Subtraction</Th>
          <Th style={dataCellStyle}>2 - 2</Th>
          <Th style={dataCellStyle}>0</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>*</Th>
          <Th style={dataCellStyle}>Multiplication</Th>
          <Th style={dataCellStyle}>3 * 3</Th>
          <Th style={dataCellStyle}>9</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>/</Th>
          <Th style={dataCellStyle}>Division</Th>
          <Th style={dataCellStyle}>4 / 4</Th>
          <Th style={dataCellStyle}>1</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>&gt;</Th>
          <Th style={dataCellStyle}>Greater Than</Th>
          <Th style={dataCellStyle}>5 &gt; 5</Th>
          <Th style={dataCellStyle}>false</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>&lt;</Th>
          <Th style={dataCellStyle}>Less Than</Th>
          <Th style={dataCellStyle}>5 &lt; 6</Th>
          <Th style={dataCellStyle}>true</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>==</Th>
          <Th style={dataCellStyle}>Equal To</Th>
          <Th style={dataCellStyle}>7 == 7</Th>
          <Th style={dataCellStyle}>true</Th>
        </Tr>
        <Tr>
          <Th style={dataCellStyle}>!=</Th>
          <Th style={dataCellStyle}>Not Equal To</Th>
          <Th style={dataCellStyle}>8 != 8</Th>
          <Th style={dataCellStyle}>false</Th>
        </Tr>
      </Tbody>
    </Table>
  </TableContainer>
)

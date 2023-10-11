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
  useClipboard,
  useColorModeValue
} from '@chakra-ui/react'

import {
  ChevronRightIcon,
  CopyIcon,
  CheckIcon,
  ExternalLinkIcon
} from '@chakra-ui/icons'

import { ELink } from './home'
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

export const TableOfContents = ({ title }) => {
  // Convert title to link
  const toLinkFormat = str => {
    return str.replace(/\s+/g, '-').toLowerCase()
  }
  const link = toLinkFormat(title)

  return (
    <PostListItem>
      <Link href={`#${link}`}>{title}</Link>
    </PostListItem>
  )
}

export const ImageCaption = ({ children }) => (
  <Box mt={-2.5} width="100%" textAlign="center" lineHeight={1.2}>
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

export const PostSmallHeading = ({ children }) => {
  // Convert content to an id
  const generateId = text => {
    return text.toLowerCase().replace(/\s+/g, '-')
  }
  const ID = generateId(children)

  return (
    <Heading id={ID} as="h5" fontSize={17} mt={4}>
      {children}
    </Heading>
  )
}

export const PostImage = ({ src, alt }) => (
  <Box mt={6} mb={2}>
    <NextImage
      className="grid-item-thumbnail"
      src={src}
      alt={alt}
      placeholder="blur"
      loading="lazy"
    />
  </Box>
)

export const B = ({ children }) => (
  <Text display="inline" fontWeight="extrabold">
    {children}
  </Text>
)

// IC short for "inline code", to make code cleaner
export const IC = ({ children }) => (
  <Code style={{ textIndent: '0' }}>{children}</Code>
)

// Inline code for tables
export const TableIC = ({ children }) => (
  <Th
    style={{
      borderBottom: '1px solid',
      borderLeft: '1px solid',
      borderRight: '1px solid',
      textAlign: 'center',
      textTransform: 'none'
    }}
  >
    <Code style={{ textIndent: '0', fontSize: '11px' }}>{children}</Code>
  </Th>
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

  const buttonColorScheme = useColorModeValue('#f0e7db', '#f0e7db')

  return (
    <Box mt={2} mb={2}>
      <Box
        backgroundColor="#3a404d"
        maxWidth="100%"
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
            colorScheme={buttonColorScheme}
            color="white"
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
          customStyle={{ padding: '20px', fontSize: '14px' }}
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

const TableCaptionLink = ({ link }) => (
  <ImageCaption>
    For a more comprehensive list, you can visit the following{' '}
    <ELink href={link}>link</ELink>.
  </ImageCaption>
)

export const JavaScriptDataTypesTable = () => {
  const JSDTTEntry = ({ dataType, examples }) => (
    <Tr>
      <Th style={dataCellStyle}>{dataType}</Th>
      <Th style={dataCellStyle}>{examples}</Th>
    </Tr>
  )
  return (
    <TableContainer mt={4}>
      <Table mb={2}>
        <Thead>
          <Tr>
            <Th style={headerCellStyle}>Data Type</Th>
            <Th style={headerCellStyle}>Examples</Th>
          </Tr>
        </Thead>
        <Tbody>
          <JSDTTEntry
            dataType="String"
            examples='"Hello, World!", "JavaScript"'
          />
          <JSDTTEntry dataType="Number" examples="1, 2.3" />
          <JSDTTEntry dataType="Boolean" examples="true, false" />
        </Tbody>
      </Table>
      <TableCaptionLink link="https://www.w3schools.com/js/js_datatypes.asp" />
    </TableContainer>
  )
}

const OperatorTableHeading = () => (
  <Tr>
    <Th style={headerCellStyle}>Operator</Th>
    <Th style={headerCellStyle}>Meaning</Th>
    <Th style={headerCellStyle}>Example</Th>
    <Th style={headerCellStyle}>Result</Th>
  </Tr>
)

const OperatorTableEntry = ({ operator, meaning, example, result }) => (
  <Tr>
    <Th style={dataCellStyle}>{operator}</Th>
    <Th style={dataCellStyle}>{meaning}</Th>
    <Th style={dataCellStyle}>{example}</Th>
    <Th style={dataCellStyle}>{result}</Th>
  </Tr>
)

export const JavaScriptOperatorTable = () => (
  <TableContainer mt={4}>
    <Table mb={2}>
      <Thead>
        <OperatorTableHeading />
      </Thead>
      <Tbody>
        <OperatorTableEntry
          operator="+"
          meaning="Addition"
          example="1 + 1"
          result="2"
        />
        <OperatorTableEntry
          operator="-"
          meaning="Subtraction"
          example="2 - 2"
          result="0"
        />
        <OperatorTableEntry
          operator="*"
          meaning="Multiplication"
          example="3 * 3"
          result="9"
        />
        <OperatorTableEntry
          operator="/"
          meaning="Division"
          example="4 / 4"
          result="1"
        />
        <OperatorTableEntry
          operator=">"
          meaning="Greater Than"
          example="5 > 5"
          result="false"
        />
        <OperatorTableEntry
          operator="<"
          meaning="Less Than"
          example="5 < 6"
          result="true"
        />
        <OperatorTableEntry
          operator="=="
          meaning="Equal To"
          example="7 == 7"
          result="true"
        />
        <OperatorTableEntry
          operator="!="
          meaning="Not Equal To"
          example="8 != 8"
          result="false"
        />
      </Tbody>
    </Table>
    <TableCaptionLink link="https://www.w3schools.com/jsref/jsref_operators.asp" />
  </TableContainer>
)

export const VersionControlCommandLineTable = () => {
  const VCCLTEntry = ({ command, usage, example }) => (
    <Tr>
      <TableIC>{command}</TableIC>
      <Th style={dataCellStyle}>{usage}</Th>
      <TableIC>{example}</TableIC>
    </Tr>
  )
  return (
    <TableContainer mt={4}>
      <Table mb={2}>
        <Thead>
          <Tr>
            <Th style={headerCellStyle}>Command</Th>
            <Th style={headerCellStyle}>Usage</Th>
            <Th style={headerCellStyle}>Example</Th>
          </Tr>
        </Thead>
        <Tbody>
          <VCCLTEntry
            command="cd x"
            usage="Change Directory"
            example="cd dir"
          />
          <VCCLTEntry
            command="cd .."
            usage="Parent Directory"
            example="cd .."
          />
          <VCCLTEntry
            command="mkdir x"
            usage="Make Directory"
            example="mkdir new_dir"
          />
          <VCCLTEntry
            command="touch x"
            usage="Create New File"
            example="touch ex.js"
          />
          <VCCLTEntry
            command="code x"
            usage="Open File in VS Code"
            example="code ex.js"
          />
          <VCCLTEntry command="ls" usage="List Contents" example="ls" />
          <VCCLTEntry
            command="man x"
            usage="Command Manual"
            example="man mkdir"
          />
          <VCCLTEntry
            command="pwd"
            usage="Path to Current Directory"
            example="pwd"
          />
        </Tbody>
      </Table>
      <TableCaptionLink link="https://inst.eecs.berkeley.edu/~cs61b/fa13/ta-materials/unix-concise-ref.pdf" />
    </TableContainer>
  )
}

export const PythonOperatorsTable = () => {
  return (
    <TableContainer mt={4}>
      <Table mb={2}>
        <Thead>
          <OperatorTableHeading />
        </Thead>
        <Tbody>
          <OperatorTableEntry
            operator="+"
            meaning="Addition"
            example="1 + 1"
            result="2"
          />
          <OperatorTableEntry
            operator="-"
            meaning="Subtraction"
            example="2 - 2"
            result="0"
          />
          <OperatorTableEntry
            operator="*"
            meaning="Mutliplication"
            example="3 * 3"
            result="9"
          />
          <OperatorTableEntry
            operator="/"
            meaning="Division"
            example="4 / 4"
            result="1"
          />
          <OperatorTableEntry
            operator="and"
            meaning="True if both are True"
            example="True and True"
            result="True"
          />
          <OperatorTableEntry
            operator="or"
            meaning="True if either are True"
            example="True or False"
            result="True"
          />
          <OperatorTableEntry
            operator="not"
            meaning="Opposite Boolean value"
            example="not True"
            result="False"
          />
        </Tbody>
      </Table>
      <TableCaptionLink link="https://www.w3schools.com/python/python_operators.asp" />
    </TableContainer>
  )
}

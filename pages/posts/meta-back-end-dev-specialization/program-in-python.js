import { Container, List } from '@chakra-ui/react'
import { B, ImageCaption, Title } from '../../../components/posts'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PostBigHeading,
  PostSmallHeading,
  PostImage,
  TableOfContents,
  CodeBox,
  IC
} from '../../../components/posts'
import { ELink } from '../../../components/home'

import certificate from '../../../public/images/posts/intro-mobile-dev-cert.jpeg'

const syntaxCode = `# single line of code
x = 10 +    2
+4
print(x) # prints 12

# indentation example
x = 10
if x == 10:
    # executes if x is 10
    print("x is 10")
else:
    # executes if x is not 10
    print("x is not 10")

'''
multi
line
comments!
'''
`

const variablesCode = `# variable assignment and updating
x = 10
print(x) # prints 10

x = 20
print(x) # prints 20

# camelCase
thisIsCamelCase = True

# snake_case
this_is_snake_case = "All lowercase letters and joined by an underscore"`

const dataTypeCode = `# numeric types
type(10) # int
type(10.0) # float
type(10+1j) # complex

# sequence types
l = [1,2,3]
type(l) # list

t = (4,5,6)
type(t) # tuple

l[0] # 1
t[2] # 6

# dictionary type
hashTable = {'key': 'value', 'anyTypes': True, 4: False}
type(hashTable) # dict

hashTable['key'] # 'value'
hashTable[4] # False

# boolean type
type(True) # bool
type(False) # bool

# set type
s = {1,4,-6,'unique',True}
type(s) # set`

const title = 'Programming In Python'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>{title}</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>
          Python, its syntax, modules, ecosystem, libraries and tools
        </PostListItem>
        <PostListItem>Error and exception handling</PostListItem>
        <PostListItem>Object-oriented programming concepts</PostListItem>
      </List>
      {/*
      <PostImage src={certificate} alt="certification" />
*/}
      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents title="Syntax" />
        <TableOfContents title="Variables" />
        <TableOfContents title="Data Types" />
      </List>

      <PostBigHeading>Introduction:</PostBigHeading>
      <P>
        Python is a popular high-level programming language that has easy-to-use
        syntax similar to English. It is far more simplistic compared to other
        lower-level languages, such as C or Java. This allows for developers to
        focus on solving the problem at hand, instead of worrying about small
        nuances within their code. Thus, applications can be developed faster
        and are easier to maintain. To install Python onto your computer, visit
        the official website at{' '}
        <ELink href="https://www.python.org/downloads/">
          https://www.python.org/downloads/
        </ELink>
        .
      </P>
      <PostSmallHeading>Syntax</PostSmallHeading>
      <P>
        Whitespace and indentation in Python is crucial to its syntax. Every
        newline created using the &quot;Enter&quot; key is considered a
        different line of code. If you are familiar with C, this is equivalent
        to &quot;;&quot;, but in Python it is just implicit with every newline
        entry. Any additional whitespace in a line of code is ignored, and will
        execute as if there is only 1 space. Indentation determines the scope of
        the code, and which block it belongs to, similar to &quot;&#123;&quot;
        and &quot;&#125;&quot; in C. Comments are supported in Python, and can
        be used to explain code, write notes or write TODO tasks for later. To
        write single-line comments, use &quot;#&quot;, and anything after it on
        that line will be commented out. For multiline comments, use 3
        apostrophes (&apos;&apos;&apos;) to start and end your comments.
      </P>
      <CodeBox language="python">{syntaxCode}</CodeBox>
      <ImageCaption>Remember that extra whitespace is ignored!</ImageCaption>

      <PostSmallHeading>Variables</PostSmallHeading>
      <P>
        Variables are an essential part to any programming language, as it
        allows you to manipulate data. Python variable declaration is very
        simple, with the structure of <IC>name = value</IC>, where <IC>name</IC>{' '}
        is the variable name and <IC>value</IC> is the desired value of that
        variable. It can be updated by using the same syntax. Variable naming
        must be informative to let you and other programmers know what the
        variable stores. Common naming conventions for variables in coding are{' '}
        <IC>camelCase</IC> and <IC>snake_case</IC>. <IC>camelCase</IC> has each
        word joined without spaces, and each word (except the first one) starts
        with a capital letter. <IC>snake_case</IC> has each word joined with an
        &quot;_&quot; instead of a space, with all lowercase letters. It is
        important to be consistent with the naming convention you choose, so you
        don&apos;t confuse yourself or other developers.
      </P>
      <CodeBox language="python">{variablesCode}</CodeBox>

      <PostSmallHeading>Data Types</PostSmallHeading>
      <P>
        At its core, data types tells the computer how to interpret its value.
        The 5 main data types in Python are{' '}
        <B>numeric, sequence, dictionary, boolean, and set</B>. Some data types
        can be extended; for example, numeric can extend to <IC>int</IC> or{' '}
        <IC>float</IC>, sequence can extend to <IC>list</IC> or <IC>tuple</IC>,
        etc. For more details on the different data types, visit this{' '}
        <ELink href="https://www.programiz.com/python-programming/variables-datatypes">
          reference
        </ELink>
        . To determine the type of a variable, use the <IC>type()</IC> function,
        which accepts a variable and returns its data type.
      </P>
      <P>
        As the name suggests, the numeric type classifies types of numbers. The
        sequence type allows for indexing based on their order in the sequence.
        To index into the sequence, use square bracket notation, and keep in
        mind that indexing is zero-based in Python, meaning the first element is
        index 0, the second element is index 1, and so on. The dictionary data
        type is essentially just a hash table, storing an unordered collection
        of key-value pairs. It is created using &quot;&#123;&#125;&quot;, and
        uses &quot;:&quot; to assign a key to its value, with a comma separating
        each key-value pair. Each value is accessed by its key, again using
        square bracket notation. Boolean data types are just the booleans
        &quot;True&quot; and &quot;False&quot;. The set data type is similar to
        the mathematical set, where it only contains non-duplicated values. It
        is created using &quot;&#123;&#125;&quot;, with ecah value separated by
        a comma. It is unordered and cannot be indexed into.
      </P>
      <CodeBox language="python">{dataTypeCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

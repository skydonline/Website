import { Code, Container, List } from '@chakra-ui/react'
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
  IC,
  PythonOperatorsTable
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

const typeCastingCode = `x = 10
y = str(x) # the string '10'

a = '100'
b = int(a) # the integer 100

arr = [1,2,2,3]
new_set = set(arr) # the set {1,2,3}`

const inputAndOutputCode = `name = input("Your name: ")
num1 = input("First number: ")
num2 = input("Second number: ")

print(name) # prints value of the name variable
print(num1 + num2) # prints concatenation of both nums
print(int(num1) + int(num2)) # prints addition of both nums`

const conditionalCode = `x = 10
y = 9

if x > y:
    # this executes since x > y
    # nothing else will execute since this has already been executed
    print("x is greater than y")
elif x < y:
    # this doesn't execute
    print("x is less than y")
else:
    # this doesn't execute
    print("x is equal to y")`

const iterativeCode = `# for loop
for i in range(0,3):
    print(i)
# prints 0, 1, 2

# while loop
j = 0
while j != 3:
    print(j)
    j += 1
# breaks when j == 3
# prints 0, 1, 2`

const matchCode = `status = 200
match status:
    case 200 | 201:
        # executes if status == 200 or status == 201
        # is executed since status == 200
        print("Success")
    case 404:
        # doesn't execute since status == 200 and an execution already occurred
        print("Not found")
    case 500:
        # doesn't execute since status == 200 and an execution already occurred
        print("Server Error")
    case _:
        # executes if all above conditions are false
        # equivalent to "else"
        print("Unknown")`

const loopControlCode = `# break
for i in range(10):
    if i == 2:
        break # breaks out of for loop if i is 2
  
# continue
# skips print statement when i == 1, doesn't print anything
for i in range(3):
    if i == 1:
        continue
    print("i is" + i)
    
# pass
# something is required below the if statement
for i in range(7):
    if i == 0:
        pass
    else:
        print("i is not 0")`

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
        <TableOfContents title="Type Casting" />
        <TableOfContents title="Input/Output" />
        <TableOfContents title="Operators" />
        <TableOfContents title="Control Flow" />
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

      <PostSmallHeading>Type Casting</PostSmallHeading>
      <P>
        Type casting is when one data type is converted to another data type, if
        they are compatible. There are explicit and implicit data type
        conversions. Implicit conversion means it is done automatically by
        Python, without the programmer doing anything. For example, this can
        happen in comparisons or addition of <IC>int</IC> and <IC>float</IC>.
        Programmers can perform explicit type conversion using Python functions,
        such as <IC>str()</IC>, <IC>int()</IC>, <IC>list()</IC>, etc. They
        convert it to its respective data type.
      </P>
      <CodeBox language="python">{typeCastingCode}</CodeBox>

      <PostSmallHeading>Input/Output</PostSmallHeading>
      <P>
        A common method to obtain input from the user is using the{' '}
        <IC>input()</IC> function. Any text inside the function will be
        displayed to the user as a prompt. Note that any input recieved will be
        treated as a string data type, even if given an integer or float. To
        convert them, use explicit conversion, mentioned in the previous
        section. As for output, the <IC>print()</IC> function can be used to
        print information to the console.
      </P>
      <CodeBox language="python">{inputAndOutputCode}</CodeBox>
      <ImageCaption>
        <IC>input()</IC> prompts the user for some input, <IC>print()</IC>{' '}
        prints its arguments to the screen
      </ImageCaption>

      <PostSmallHeading>Operators</PostSmallHeading>
      <P>
        Operators are symbols that perform certain actions. There are
        mathematical and logical operators in Python, which behave differently.
        Math operators are just like the ones found in elementary school math:{' '}
        <B>addition, subtraction, multiplication, division</B>, etc. Logical
        operators are used to evaluate if a condition is <IC>True</IC> or{' '}
        <IC>False</IC>. Logical operators are used to control the flow of the
        program; for example, whether or not to execute this block of code.
        Below is a table of the most frequently used math and logical operators
        in Python, along with an example.
      </P>
      <PythonOperatorsTable />

      <PostSmallHeading>Control Flow</PostSmallHeading>
      <P>
        Control flow refers to how code in a program are executed. Different
        decisions in the program need to be made, which ultimately changes how
        the program performs. The 2 different types of control flow are
        conditional and iterative. Some examples of a conditional statement is{' '}
        <IC>if</IC>, <IC>elif</IC> (else if), <IC>else</IC>, etc. Some examples
        of iterative control flow, mostly referring to loops, are the{' '}
        <IC>for</IC> and <IC>while</IC> loop.
      </P>
      <P>
        <IC>if</IC> checks if the condition is True, and then performs the
        following code block. <IC>elif</IC> (also known as &quot;else if&quot;
        in other languages) executes if it is True and the previous statements
        were False. <IC>else</IC> is the catch-all statement, and executes if
        all previous conditions were False.
      </P>
      <CodeBox language="python">{conditionalCode}</CodeBox>
      <P>
        The <IC>for</IC> loop checks if a condition is met, and then
        continuously runs as long as the condition is met. The <IC>while</IC>{' '}
        loop executes a block of code repeatedly for an unknown number of times
        until the condition is no longer met. It is important to note that in a{' '}
        <IC>while</IC> loop, there needs to be something within the loop that
        can make the condition evaluate to false; otherwise, you are left with
        an infinite loop.
      </P>
      <CodeBox language="python">{iterativeCode}</CodeBox>
      <P>
        The <IC>match</IC> statement is a more clean and concise way to check
        multiple conditions. Think of it as an <IC>if</IC>, <IC>elif</IC>, and{' '}
        <IC>else</IC> statements, just using <IC>match</IC> and <IC>case</IC>.{' '}
        <IC>case</IC> can be used to represent the<IC>if</IC>, <IC>elif</IC> and{' '}
        <IC>else</IC> statements. Following the <IC>case</IC> is the condition,
        and underneath is the block of code that is executed if it evaluates to
        true. It is best visualized, so see the example below.
      </P>
      <CodeBox language="python">{matchCode}</CodeBox>

      <P>
        Loop control statements change the normal execution flow within the
        loop. <IC>break</IC> stops the loop entirely, essentially &quot;breaking
        out&quot; of the loop. <IC>continue</IC> skips the rest of the code in
        the current iteration of the loop, but does not break out of the whole
        loop. For example, if you were on the first iteration, there was a{' '}
        <IC>continue</IC> statement, it would skip over the remaining code for
        the first iteration, but then continue on with the next iteration.{' '}
        <IC>pass</IC> performs no operation, so it is used when there is no
        action but syntactically, there needs to be code there.
      </P>
      <CodeBox language="python">{loopControlCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

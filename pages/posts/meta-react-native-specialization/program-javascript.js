import { Box, Container, List, Link, Text } from '@chakra-ui/react'
import P from '../../../components/paragraph'
import Layout from '../../../components/layouts/article'
import {
  PostListItem,
  PostBigHeading,
  PostSmallHeading,
  ImageCaption,
  Title,
  CodeBox,
  IC,
  DataTypesTable,
  OperatorTable,
  PostImage
} from '../../../components/posts'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import nestedLoops from '../../../public/images/posts/nestedLoops.png'

// Codeboxes
const variableDeclarationCode = `var name = value;`

const conditionalIfCode = `var place = 'first';
if (place == 'first') {
  // executes if place is 'first'
  console.log("Gold medal");
} 
else if (place == 'second') {
  // executes if place is 'second'
  console.log("Silver medal");
}
else if (place == 'third') {
  // executes if place is 'third'
  console.log("Bronze medal");
}
else {
  // executes if all above conditions fail
  console.log("No medal");
}
`

const conditionalSwitchCode = `var place = 'first';
switch(place) {
  case 'first':
    // executes if place is 'first'
    console.log("Gold medal");
    break;
  case 'second':
    // executes if place is 'second'
    console.log("Silver medal");
    break;
  case 'third':
    // executes if place is 'third'
    console.log("Bronze medal");
    break;
  default:
    // executes if all above conditions fail
    console.log("No medal");
}
`

const loopsSyntaxCode = `// for loop
// counter declaration: "var i = 0"
// condition: "i < 3"
// increment counter after every iteration: "i++"
for (var i = 0; i < 3; i++;) {
  console.log(i);
}

// while loop
// condition: "i < 3"
var i = 0;  // counter outside function
while (i < 3) {
  console.log(i);
  i++;  // manipulate counter inside function
}
`

const functionsExampleCode = `function name(argument) {
  console.log("The author is " + argument);
  // prints "The author is Sky"
}

name("Sky");`

const arrayExampleCode = `var array = ["Item 1", "Item 2", "Item 3"];   // intialization
console.log(array[0]);  // prints "Item 1"
console.log(array[2]);  // prints "Item 3"
`

const arrayPushPopCode = `var array = ["Item 1", "Item 2"];

array.push("Item 3"); // adds "Item 3" to array
console.log(array); // prints ["Item 1", "Item 2", "Item 3"]

array.pop();  // removes last item in array ("Item 3")
console.log(array); // prints ["Item 1", "Item 2"]
`

const objectExampleCode = `// initalize object
var object = {
  propertyKey: "value",
  age: 18,
  language: "JavaScript",
  "property with space": "value"
}
// assign a new key to "object" named newKey, which has value of "adding new value"
object.newKey = "adding new value";

// accesses the value stored in "language" key, prints "JavaScript"
console.log(object.language);

// accesses the value stored in "property with space" key, prints "value"
console.log(object["property with space"])`

const Work = () => (
  <Layout title="Programming with JavaScript">
    <Container>
      <Title>Programming with JavaScript</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>
          Fundamentals of JavaScript (objects, data structures, etc.)
        </PostListItem>
        <PostListItem>Node.js and npm for packages</PostListItem>
        <PostListItem>Testing using Jest</PostListItem>
      </List>

      <PostBigHeading>Content:</PostBigHeading>
      <P>
        Programming is a set of instructions given to the computer, and a
        programming language is a method of communication between computers and
        people (computers only understand binary, 0&apos;s and 1&apos;s).
        JavaScript is a type of programming language, and is considered as the
        language of the web, since it mainly has been used to build webpage
        interactivity. It is baked into the browser.
      </P>
      <P>
        JavaScript is immensely popular due to its ease of use, used in every
        website and has a large community to assist you. It doesn&apos;t require
        a lot to setup, making it beginner friendly. All modern websites with
        webpage interactivity use JavaScript, to facilitate those interactions.
        It is the most common programming language around the world, resulting
        in a large community of people that can aid you in your coding journey.
      </P>

      <PostSmallHeading>Variables</PostSmallHeading>
      <P>
        Variables in programming is very similar to variables in math; you can
        assign the variable any value, they can change if desired, and they can
        be reused. Variables in JavaScript are declared like the following:
      </P>
      <CodeBox language="javascript">{variableDeclarationCode}</CodeBox>
      <P>
        <IC>var</IC> declares to JavaScript that this is a variable.{' '}
        <IC>name</IC> is any arbitrary name that we give to the variable. It can
        be anything, as long as they are not &quot;keywords&quot;, which are
        words that are reserved in the programming language that have special
        functionality (e.g. <IC>var</IC>, <IC>if</IC>, <IC>const</IC>). The{' '}
        <IC>=</IC> sign is the assignment operator; it doesn&apos;t mean
        equivalent, instead stores the <IC>value</IC> on the right to the
        variable <IC>name</IC> on the left.
      </P>

      <PostSmallHeading>Data Types</PostSmallHeading>
      <P>
        Data is some sort of information. This can be text, numbers, etc. Each
        programming language has their own set of data types, but each typically
        contain the following: text (called string), numbers (integers or
        numerical values), boolean (either true or false). Each data type
        follows certain rules, in order for it to be considered valid. For
        example, strings need to be enclosed in quotation marks. Additionally,
        each data types have certain use cases, since they have specific
        operations you can perform on them. Below are some examples of data
        types:
      </P>
      <DataTypesTable />
      <ImageCaption>
        {' '}
        For a more comprehensive list, you can visit the following{' '}
        <Link
          target="_blank"
          href="https://www.w3schools.com/js/js_datatypes.asp"
        >
          link
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </ImageCaption>

      <PostSmallHeading>Operators</PostSmallHeading>
      <P>
        Operators allow you to perform operations on variables and values. It
        has a similar meaning to mathematical operators, such as addition and
        subtraction symbols. Just like in math, there are arithmetic operators.
        In JavaScript, and in the majority of programming languages, there are
        comparison operators. Here are a few common operators in JavaScript:
      </P>
      <OperatorTable />
      <ImageCaption>
        For a more comprehensive list, you can visit the following{' '}
        <Link
          target="_blank"
          href="https://www.w3schools.com/jsref/jsref_operators.asp"
        >
          link
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </ImageCaption>

      <PostSmallHeading>Conditional Statements</PostSmallHeading>
      <P>
        Conditional statements only run if the condition is evaluated to true.
        This is useful if the developer only wants to run a block of code, based
        on some condition. An <IC>if</IC> statement checks if the condition is
        true; if it is, run the block of code, if false, don&apos;t run it. They
        can have an <IC>else if</IC> statement, that runs another block of code,
        if the prior statements are evaluated to false. They can also include an{' '}
        <IC>else</IC> statement, which runs if no other conditions are true.
      </P>
      <CodeBox language="javascript">{conditionalIfCode}</CodeBox>

      <P>
        If there are multiple lines of <IC>else if</IC> statements, it may be
        more convenient to use the <IC>switch</IC> statement. While
        functionally, they perform the same, the syntax is drastically
        different. The <IC>switch</IC> statement tends to be more readable when
        there are more lines of code. Instead of <IC>if</IC> or <IC>else if</IC>{' '}
        statements, we just use <IC>case</IC>. At the end of every <IC>case</IC>{' '}
        block, there needs to be a <IC>break;</IC> command to exit the{' '}
        <IC>switch</IC> statement. <IC>default</IC> replaces <IC>else</IC>, but
        they functionally are the same; a catch-all statement. The code below
        functionally is the same as the code above, just using <IC>switch</IC>{' '}
        instead of <IC>if else</IC>. Notice how it is more concise and readable.
      </P>
      <CodeBox language="javascript">{conditionalSwitchCode}</CodeBox>

      <PostSmallHeading>Loops</PostSmallHeading>
      <P>
        Loops are used when a block of code needs to be repeatedly executed.
        They are similar to conditional statements, in the sense that some
        condition must be met in order for the code to execute. However, instead
        of only executing once, they execute as many times as possible, until
        the condition fails. There are numerous types of loops in JavaScript,
        but the 2 main ones are a <IC>for</IC> and <IC>while</IC> loop. It is
        possible to have loops inside of other loops, and this is what we call
        nested loops. Below are examples to demonstrate the syntax of these
        loops:
      </P>
      <CodeBox language="javascript">{loopsSyntaxCode}</CodeBox>
      <PostImage src={nestedLoops} alt="Nested Loops" />
      <ImageCaption>
        Example of a{' '}
        <Text display="inline" textDecoration="underline">
          nested
        </Text>{' '}
        loop: a <IC>for</IC> loop inside of another <IC>for</IC> loop
      </ImageCaption>

      <P>
        Notice that no matter the type of loop, there are 3 components to it:
      </P>
      <List>
        <PostListItem>Loop counter</PostListItem>
        <PostListItem>Condition</PostListItem>
        <PostListItem>Method to update counter</PostListItem>
      </List>
      <P>
        The loop counter is some variable that counts how many times the block
        of code has been executed. The condition must be satisfied before each
        code block execution; if not, the loop will terminate and move onto the
        next lines of code. The count variable needs to be updated in some sort
        of way after each iteration of the loop, in order to prevent an infinite
        loop. If the counter variable is never updated, then the condition will
        always be satisfied, so the block of code will run forever.
      </P>

      <PostSmallHeading>Functions</PostSmallHeading>
      <P>
        Functions are a reusable block of code that can be run when it is
        called. It is declared by the <IC>function</IC> keyword, followed by the
        name that you desire to give to the function (can be anything except
        keywords), immediately followed by &quot;()&quot;. There can be
        arguments placed inside the parentheses, which are just parameters the
        function takes in that can used inside the code block. The function is
        called by typing its name, and the arguments it requires inside
        parentheses.
      </P>
      <CodeBox language="javascript">{functionsExampleCode}</CodeBox>

      <PostSmallHeading>Arrays</PostSmallHeading>
      <P>
        Arrays are used to store and group elements together. They allow for
        indexing into the array to access certain elements of that group. Note
        that in most programming languages, the first item of the array is
        considered &quot;index 0&quot;, the second item is &quot;index 1&quot;,
        and so on. If an element is in an array, it signals to the programmer
        that it belongs to a collection of values. Arrays can be comprised of
        any data type, and can even be a collection of different data types.
      </P>
      <CodeBox language="javascript">{arrayExampleCode}</CodeBox>

      <P>
        Arrays have built-in methods that can be used to manipulate them. Some
        of the most commonly used methods are <IC>push()</IC> and <IC>pop()</IC>
        . <IC>push()</IC> adds the item to the end of the array, while{' '}
        <IC>pop()</IC> removes the last item in the array.
      </P>
      <CodeBox language="javascript">{arrayPushPopCode}</CodeBox>

      <PostSmallHeading>Objects</PostSmallHeading>
      <P>
        Objects are used to group related data together. The object can be
        assigned properties, which are variables that are attached to that
        object. Each property is a key value pair; the variable name is the
        property key, and the variable value is the property value. Objects can
        be modified after it is initalized, and each value of every key can be
        accessed as well. The most common notations for objects are dot and
        bracket notation. Dot notation is more clean and concise, but bracket
        notation allows for accessing properties with special characters or
        spaces.
      </P>
      <CodeBox language="javascript">{objectExampleCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

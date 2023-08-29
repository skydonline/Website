import { Box, Container, List, Link, Text, Code } from '@chakra-ui/react'
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
  PostImage,
  TableOfContents
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
  console.log(\`The author is \${argument}\`);
}

name("Sky");  // "The author is Sky"

// function with default parameter
function parameters(arg = "any argument") {
  console.log(\`Argument: \${arg}\`);
}

parameters(); // "Argument: any argument"
parameters("arg"); // "Argument: arg"`

const arrayExampleCode = `var array = ["Item 1", "Item 2", "Item 3"];   // intialization
console.log(array[0]);  // "Item 1"
console.log(array[2]);  // "Item 3"
`

const arrayPushPopCode = `var array = ["Item 1", "Item 2"];

array.push("Item 3"); // adds "Item 3" to array
console.log(array); // ["Item 1", "Item 2", "Item 3"]

array.pop();  // removes last item in array ("Item 3")
console.log(array); // ["Item 1", "Item 2"]
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

// access the value stored in "language" key, prints "JavaScript"
console.log(object.language);

// access the value stored in "property with space" key, prints "value"
console.log(object["property with space"])`

const objectFunctionCode = `var computer = {
  example: function() {
    console.log("A function");
  }
}

computer.new = function() {
  console.log("New function");
}

computer.example()  // "A function"
computer.new()  // "New function"`

const bugErrorExampleCode = `console.log("1" + 2);  // prints "12" instead of 3

console.log(c);  // reference error: c is never defined

var word = "Hello;  // syntax error: the " was never closed

(1).pop  // type error: not a function`

const tryCatchThrowCode = `try {
  console.log(a); // will try to execute this line of code
}
catch (err) {
  // only executes if the try block creates an error
  console.log(err); // prints the error to the console
}

try {
  throw new Error("New error"); // executes catch block
}
catch (err) {
  console.log(err); // "New error"
}`

const functionalExampleCode = `function doubleNumber(num) {
  return num * 2
}
var exampleNum = 2;
var result = doubleNumber(exampleNum);  // passes 2 into doubleNumber function, stores return value (4) in result
console.log(result);  // 4`

const objectOrientedExampleCode = `var person = {
  awake: true,
  night: function() {
    this.awake = false
  }
}

console.log(person.awake);  // true
person.night()  // executes night function in person object, changes person.awake to false
console.log(person.awake);  // false`

const classExampleCode = `class Person {
  // constructor function
  constructor(age, hairColor) {
    this.age = age;
    this.hairColor = hairColor;
  }

  // method
  description() {
    console.log(\`\${this.age} years old and \${this.hairColor} hair\`);
  }
}

// create new instance of Person class
// newPerson.age is 18, newPerson.hairColor is "blonde"
const newPerson = new Person(18, "blonde")

newPerson.description() // "18 years old and blonde hair"`

const classPrinciplesCode = `class Animal {/* class code...*/} // base class

// inheritance
class Dog extends Animal {/* class code...*/}

// encapsulation
"abc".toUpperCase();
// I don't know how the "toUpperCase()" method works, all I know is that it converts strings to all uppercase letters. I'm unaware of how the method is implemented in code

// polymorphism
class Dog {
  isRunner() {
    console.log("Is a running dog!");
  }
}

class Pug extends Dog {
  isRunner() {
    // overrides isRunner() from base Dog class
    console.log("Short-distance runner.");
  }
}

class Greyhound extends Dog {
  isRunner() {
    // inherits isRunner() from base Dog class
    super.isRunner();
    // adds own behavior to isRunner()
    console.log("Fast dog breed!");
  }
}

const myDog = new Greyhound();
const otherDog = new Pug();

myDog.isRunner(); // "Is a running dog! Fast dog breed!"
otherDog.isRunner();  // "Short-distance runner."`

const dataArrayCode = `const demo = [1,2,3,4];

// forEach: prints to console
demo.forEach(function(num, index) {
  console.log(\`\${index}: \${num}\`)
});
// "0: 1", "1: 2","2: 3","3: 4",

// filter: filters even numbers
console.log(demo.filter(function(num) {
  return num % 2 == 0
}));
// [2, 4]

// map: multiplies by 2
console.log(demo.map(function(num) {
  return num * 2
}));
// [2, 4, 6, 8]`

const dataMapCode = `let example = new Map();
example.set(1, "First");
example.set("String", true);

console.log(example); // {1 => "First", "String" => true}
console.log(example.get("String"));  // true`

const dataSetsCode = `const array = ["blue", "red", "green", "blue", "red"];
const newSet = new Set(array);

console.log(newSet);  // {"blue", "red", "green"}`

const spreadCode = `const arr = [1, 2, 3];
function print(arg1, arg2, arg3) {
  console.log(\`3 args: \${arg1}, \${arg2}, \${arg3}\`)
}

print(arr[0], arr[1], arr[2]); // "3 args: 1, 2, 3"
print(...arr);  // same as above

// concatenate arrays
const arr2 = [4, 5];
const newArr = [...arr, ...arr2];
console.log(newArr);  // [1, 2, 3, 4, 5]

// concatenate objects
const atr1 = { age: 18 }
const atr2 = { country: "Canada" }
const person = {...atr1, ...atr2}
console.log(person);  // {age: 18, country: "Canada"}

// convert string to array
const name = "Sky";
const nameArray = [...name];
console.log(nameArray); // ["S", "k", "y"]

// copying arrays
const ogArr = ["og", "array"];
const copiedArr = [...ogArr];
console.log(copiedArr); // ["og", "array"]

// copying objects
const ogObj = { og: "obj" }
const newObj = {...ogObj}
console.log(newObj);  // { og: "obj" }`

const restCode = `// collect function arguments into an array
function taxedPrice(rate, ...items) {
  return items.map(item => item * rate) // applies tax rate to each item
}

let taxedItems = taxedPrice(1.5, 50, 100, 10);

console.log(taxedItems);  // [75, 150, 15]

// gather remaining items
const array = [1,2,3,4,5];
const [first, second, ...rest] = array; // rest operator
console.log(first);  // 1
console.log(second);  // 2
console.log(rest);  // 3`

const destructureCode = `let { PI } = Math; // there is a "PI" property in the Math object
console.log(PI);  // prints 3.1415, the value of Math.PI
console.log(Math.PI === PI);  // true

PI = 0;
console.log(Math.PI === PI);  // false`

const forOfLoop = `let car = {
  price: 5000,
  color: "black",
}

console.log(Object.keys(car));  // ["price", "color"]
console.log(Object.values(car));  // [5000, "black"]
console.log(Object.entries(car));  // [["price", 5000], ["color", "black"]]

for (key of Object.keys(car)) {
  console.log(\`\${key}: \${car[key]}\`);
}
// Object.keys(car) is ["price", "color"]
// prints "price: 5000" and "color: black"
// obtains property key and value from object`

const templateLiteralsCode = `const name = "Sky"
console.log(\`My name is \${name}!\`); // "My name is Sky!"
console.log("My name is " + name + "!");  // same result as above, just less concise and harder to read

const preserve = \`This preserves line breaks 
    and indents\`

console.log(\`\${1+1+1}\`); // 3`

const jsonCode = `// convert JSON string to object
const jsonStr = '{"name":"Sky"}';  // JSON
const jsonStrToObj = JSON.parse(jsonStr); // converting
console.log(jsonStrToObj); // {name: "Sky"}

// convert object to JSON string
const obj = {
  key: "value",
  type: "str"
}
const objToJsonStr = JSON.stringify(obj); // converting
console.log(objToJsonStr);  // '{"key": "value", "type": "str"}'`

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

      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents link="variables" title="Variables" />
        <TableOfContents link="data-types" title="Data Types" />
        <TableOfContents link="operators" title="Operators" />
        <TableOfContents
          link="conditional-statements"
          title="Conditional Statements"
        />
        <TableOfContents link="loops" title="Loops" />
        <TableOfContents link="functions" title="Functions" />
        <TableOfContents link="arrays" title="Arrays" />
        <TableOfContents link="objects" title="Objects" />
        <TableOfContents link="bugs-and-errors" title="Bugs and Errors" />
        <TableOfContents link="empty-values" title="Empty Values" />
        <TableOfContents
          link="functional-programming"
          title="Functional Programming"
        />
        <TableOfContents
          link="object-oriented-programming"
          title="Object-Oriented Programming"
        />
        <TableOfContents link="data-structures" title="Data Structures" />
        <TableOfContents
          link="spread-&-rest-operator"
          title="Spread & Rest Operator"
        />
        <TableOfContents link="other-features" title="Other Features" />
      </List>

      <PostBigHeading>Introduction:</PostBigHeading>
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
        website and has a large community to assist you. It does not require a
        lot to setup, making it beginner friendly. All modern websites with
        webpage interactivity use JavaScript, to facilitate those interactions.
        It is the most common programming language around the world, resulting
        in a large community of people that can aid you in your coding journey.
      </P>

      <PostSmallHeading id="variables">Variables</PostSmallHeading>
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
        <IC>=</IC> sign is the assignment operator; it does not mean equivalent,
        instead stores the <IC>value</IC> on the right to the variable{' '}
        <IC>name</IC> on the left.
      </P>

      <PostSmallHeading id="data-types">Data Types</PostSmallHeading>
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

      <PostSmallHeading id="operators">Operators</PostSmallHeading>
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

      <PostSmallHeading id="conditional-statements">
        Conditional Statements
      </PostSmallHeading>
      <P>
        Conditional statements only run if the condition is evaluated to true.
        This is useful if the developer only wants to run a block of code, based
        on some condition. An <IC>if</IC> statement checks if the condition is
        true; if it is, run the block of code, if false, do not run it. They can
        have an <IC>else if</IC> statement, that runs another block of code, if
        the prior statements are evaluated to false. They can also include an{' '}
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

      <PostSmallHeading id="loops">Loops</PostSmallHeading>
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

      <PostSmallHeading id="functions">Functions</PostSmallHeading>
      <P>
        Functions are a reusable block of code that can be run when it is
        called. It is declared by the <IC>function</IC> keyword, followed by the
        name that you desire to give to the function (can be anything except
        keywords), immediately followed by &quot;()&quot;. There can be
        arguments placed inside the parentheses, which are just parameters the
        function takes in that can used inside the code block. The function is
        called by typing its name, and the arguments it requires inside
        parentheses. Functions can be provided default parameters, which are
        values that the function will automatically use if some or none are
        passed in.
      </P>
      <CodeBox language="javascript">{functionsExampleCode}</CodeBox>

      <PostSmallHeading id="arrays">Arrays</PostSmallHeading>
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

      <PostSmallHeading id="objects">Objects</PostSmallHeading>
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

      <P>
        Objects can contain functions inside of them. When a function is inside
        a object, it is referred to as a &quot;method&quot;. Keep in mind, this
        function is unique to that object, and can only be called using that
        object. They can be called using dot or bracket notation, but are
        typically called through dot notation.
      </P>
      <CodeBox language="javascript">{objectFunctionCode}</CodeBox>

      <PostSmallHeading id="bugs-and-errors">Bugs and Errors</PostSmallHeading>
      <P>
        Bugs are defined as when the program does not run as intended. On the
        other hand, errors are when the program stops running unexpectedly. No
        further code is executed. There are numerous types of errors: reference,
        syntax, type, etc. For a more comprehensive list of errors, visit this{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors">
          reference
          <ExternalLinkIcon mx="2px" />
        </Link>
        . A reference error is when the code tries to refer to a variable that
        does not exist. A syntax error is when there is an issue in the syntax
        of the code, when the program cannot read the code properly. A type
        error is when the program expects to be presented with a certain data
        type, but is actually a different data type.
      </P>
      <CodeBox language="javascript">{bugErrorExampleCode}</CodeBox>

      <P>
        Error handling is the process of managing unexpected errors that occur
        during code execution. It ensures the program continues to run smoothly,
        instead of get interrupted. A common method of error handling is using
        the <IC>try</IC> and <IC>catch</IC> blocks. <IC>try</IC> is what the
        program will try to execute, but if it recieves an error, it will
        execute the <IC>catch</IC> block. If you want to create your own error
        and custom message, use the <IC>throw</IC> keyword. Keep in mind in the
        examples below, &quot;err&quot; can be anything, but it is common
        convention to use &quot;err&quot; for catching the error from the try
        block.
      </P>
      <CodeBox language="javascript">{tryCatchThrowCode}</CodeBox>
      <ImageCaption>
        Even though an error occurs, the program continues to run
      </ImageCaption>

      <PostSmallHeading id="empty-values">Empty Values</PostSmallHeading>
      <P>
        In programming, there may be situations where a value should exist, but
        currently does not. This would require an empty value. In JavaScript,
        there are 3 main types of empty value datatypes: null, undefined, and
        empty strings. The null datatype is an intentional assignment value, and
        means the absence of an object or value. The undefined datatype is used
        when a variable has been declared but yet to be given a specific value.
        An empty string can be used as a placeholder for values that will be
        filled in later.
      </P>

      <PostSmallHeading id="functional-programming">
        Functional Programming (FP)
      </PostSmallHeading>
      <P>
        When speaking or writing English, the style of language varies: it can
        be very formal, casual, or somewhere inbetween. The same goes for
        programming, in the sense that there are different styles. Functional
        programming focuses on utilizing functions to process data, and the data
        exists outside that function. The functions can return new values, which
        are then used elsewhere in the code.
      </P>
      <CodeBox language="javascript">{functionalExampleCode}</CodeBox>

      <P>
        First-class functions is an important concept in functional programming.
        A function in JavaScript is essentially just a value, like a string or
        number. We can pass a function to another function, save it in a
        variable, or return it from other functions.
      </P>
      <P>
        Higher-order functions can accept other functions are arguments or
        return functions when executed. A function can be passed into another
        function, or the return value of the function can be another function.
      </P>
      <P>
        Pure functions always return the exact same result if it is given the
        same arguments. As long as the inputs are the same, the output will be
        the same. It should not have side-effects; this means the function does
        not modify anything outside of itself. No external variables are
        manipulated.
      </P>
      <P>
        With the introduction of ES6 JavaScript, the keywords <IC>let</IC> and{' '}
        <IC>const</IC> were introduced. These are preferred over the{' '}
        <IC>var</IC> keyword to create variables. While they essentially have
        the same syntax, just replacing <IC>var</IC> with <IC>let</IC> or{' '}
        <IC>const</IC>, they have different functionality. Unlike <IC>var</IC>,
        they cannot be used prior to declaration, the variable cannot be
        redeclared, and is by default scoped to the block of code it is in.{' '}
        <IC>let</IC> is used when the variable might change, and can be
        reassigned a different value. <IC>const</IC> is used when the variable
        will not change, since it cannot be reassigned.
      </P>

      <PostSmallHeading id="object-oriented-programming">
        Object-Oriented Programming (OOP)
      </PostSmallHeading>
      <P>
        Another popular programming paradigm is object-oriented programming. The
        main idea is that functions and data are grouped into objects, making
        them &quot;belong together&quot;. The methods in the object update its
        properties. The keyword <IC>this</IC> just refers to the object itself,
        but means the same thing as retyping the object name.
      </P>
      <CodeBox language="javascript">{objectOrientedExampleCode}</CodeBox>
      <P>
        Classes are a fundamental concept in OOP. They allow for the creation of
        numerous objects that are similar, each called an &quot;instance&quot;,
        but with different property values. The <IC>constructor</IC> function
        takes in any parameters the user provides when creating an instance, and
        assigns those parameters to certain property keys of that instance. Each
        instance has the same structure and behaviour that was outlined in the
        class definition. Classes are initialized using the <IC>class</IC>{' '}
        keyword. A new instance of that class is initalized by assigning it to a
        variable, using <IC>new</IC> followed by the class name, and in
        parentheses any arguments it takes.
      </P>
      <CodeBox language="javascript">{classExampleCode}</CodeBox>
      <P>
        There are 4 major OOP principles: inheritance, encapsulation,
        abstraction, and polymorphism.
      </P>
      <P>
        Inheritance is a fairly straightforward concept. There exists a base
        class. Sub-classes of the base class inherit the base class properties,
        and there may even be sub-sub-classes that inherit from those classes.
        The <IC>extends</IC> keyword is followed by the class name that it will
        inherit from creates this inheritance relationship.
      </P>
      <P>
        Encapsulation hides the internal code details from other users. The user
        just needs to know what the method does, not how it actually works. This
        prevents malicious access to the data, violating the data integrity.
      </P>
      <P>
        Abstraction is concerned with writing code that is generalized. Classes
        simplify complex objects, by creating a template to model objects based
        on basic characteristics. Only the essential properties and methods are
        included.
      </P>
      <P>
        Polymorphism allows for building objects that have functions with the
        same name but behave differently. They can be overriden partially or
        entirely. The code below demonstrates these concepts.
      </P>
      <CodeBox language="javascript">{classPrinciplesCode}</CodeBox>

      <PostSmallHeading id="data-structures">Data Structures</PostSmallHeading>
      <P>
        Data structures are a core concept to every programming language. Data
        structures are an efficient way to store and organize data. JavaScript
        is limited in the available types of data structures compared to other
        programming languages. There are objects, arrays, maps, sets, and a few
        more.
      </P>
      <P>
        An object is a collection of key-value pairs that is unordered and
        cannot be iterated over. It is used when you need to access a particular
        value under a key, among related data that are grouped together. An
        array is a collection of values that is ordered and can be iterated
        over. It is used when you need to access a value under an index, not a
        key. Maps are like iterable objects; they have key-value pairs, but
        unlike objects, they can be iterated over and any value can be used as a
        key (not just strings or symbols), as long as it is unique. A set is a
        unique collection of values, there are no duplicates.
      </P>
      <P>
        Some important methods for arrays are <IC>forEach()</IC>,{' '}
        <IC>filter()</IC> and <IC>map</IC>. The <IC>forEach()</IC> method loops
        over each item of the array, and accepts a function that will be
        performed on every item. In the function, the first parameter is the
        array item, and (optionally) the second parameter is the index. The{' '}
        <IC>filter()</IC> method also accepts a function that performs on each
        item, and filters based on that function test. If it passes the function
        test, it stays in the returned array. The <IC>map</IC> method performs a
        function on every item in the array.
      </P>
      <CodeBox language="javascript">{dataArrayCode}</CodeBox>
      <P>
        A lot of features regarding objects and how to work with them have
        already been discussed. Please refer to the{' '}
        <Link href="#objects">objects</Link> section.
      </P>
      <P>
        Maps are similar to objects in JavaScript, but they have no inheritance
        or prototypes. They are built using the <IC>Map()</IC> constructor. The
        keys can be any data type, but cannot be duplicated. If they are
        duplicated, it just updates that value for the key. Maps are ordered by
        insertion order, with the earliest insertion being the first item. To
        get the value of a particular key, use the <IC>get()</IC> method.
      </P>
      <CodeBox language="javascript">{dataMapCode}</CodeBox>
      <P>
        Sets are similar to mathematical sets, in the sense that it is a
        collection of unique values. They are built using the <IC>Set()</IC>{' '}
        constructor.
      </P>
      <CodeBox language="javascript">{dataSetsCode}</CodeBox>
      <P>
        There are many other types of data structures, such as queues, stacks,
        linked lists, trees, etc. However, these are not natively implemented
        into JavaScript, so you will have to code them on your own.
      </P>

      <PostSmallHeading id="spread-&-rest-operator">
        Spread & Rest Operator
      </PostSmallHeading>
      <P>
        The spread operator is used to expand an iterable, such as an array.
        Denoted as <IC>...</IC>, it is placed infront of the iterable that you
        want to expand. This should only be used in places where multiple
        elements are expected, such as function arguments. It is much more
        concise and readable than individually typing out indexes. Other uses of
        the spread operator include concatenating arrays/objects together,
        converting a string to an array, or even copying objects/arrays.
      </P>
      <CodeBox language="javascript">{spreadCode}</CodeBox>

      <P>
        Like the spread operator, the rest operator is denoted as <IC>...</IC>.
        However, the functionality is very different; it packs excess items into
        an array. It can be used in function parameters to collect all the
        arguments into a single array, gather remaining items of an array to be
        stored inside another array, and many other use cases.
      </P>
      <CodeBox language="javascript">{restCode}</CodeBox>

      <PostSmallHeading id="other-features">Other Features</PostSmallHeading>
      <P>
        Destructuring in JavaScript can be thought of as extracting certain
        items from arrays or objects to a different location, while leaving the
        original data untouched. Once it has been destructured, they are
        delinked from each other, meaning modifying one does not affect the
        other.
      </P>
      <CodeBox language="javascript">{destructureCode}</CodeBox>

      <P>
        An advanced way to iterate over items is using a for of loop (also
        referred to as for...of loop). Arrays are considered iterables, and
        while objects are not, we can use certain methods to iterate over them.
        But, objects themselves are not iterable. The parameter is the object we
        want to loop over, and the return type from these methods are arrays.{' '}
        <IC>Object.keys()</IC> returns property keys, <IC>Object.values()</IC>{' '}
        returns property values, <IC>Object.entires()</IC> returns arrays, each
        containing the property key and value.
      </P>
      <P>
        A for of loop iterates executes the block of code for every item in the
        iterable. For example, in an array, it will only run the loop once for
        every entry in the array. A for of loop is useful if you need to perform
        an action for each entry in the iterable.
      </P>
      <CodeBox language="javascript">{forOfLoop}</CodeBox>
      <P>
        Template literals are a useful feature in JavaScript. They are a type of
        way to work with strings, using the backtick(<IC>``</IC>) characters. I
        have used them numerous times throughout this reading, when providing
        code examples. They allow you to directly insert variables, using{' '}
        <IC>$&#123;variable&#125;</IC>, where the name <IC>variable</IC> is the
        name of the variable you wish to insert. Additionally, template literals
        preserve the original formatting; this means line breaks, indentation,
        etc. Line breaks in particular were not achievable using single
        (&apos;&apos;) or double (&quot;&quot;) quotes. Expressions inside the
        template literals can also be evaluated. There are numerous other
        features, which can be found{' '}
        <Link
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
        >
          here
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </P>
      <CodeBox language="javascript">{templateLiteralsCode}</CodeBox>

      <P>
        Modules are vital to coding, since they allow for the reuse of
        standalone units of code. This means anyone can add, remove or replace
        modules from their own project, and everything will still work as
        intended. Modules can be published for others to use in their own
        workflow.
      </P>
      <P>
        JavaScript Object Notation (JSON) is the most popular data interchange
        format on the web. It is very lightweight and easy to handle with
        JavaScript. It is derived from JavaScript&apos; object literal notation,
        in a string format with specific rules. A JSON string can be converted
        to a object using <IC>JSON.parse()</IC>, and an object can be converted
        to a JSON string using <IC>JSON.stringify()</IC>.
      </P>
      <CodeBox language="javascript">{jsonCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

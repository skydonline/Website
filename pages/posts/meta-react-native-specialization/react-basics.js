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
  PostImage,
  TableOfContents
} from '../../../components/posts'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import certificate from '../../../public/images/posts/program-javascript-cert.jpeg'

const exportMethodsCode = `// export default methods
export default function squared(a) {
  console.log(a*a);
}

// alternative
function squared(a) {
  console.log(a*a);
}
export default squared;


// named export methods
export function squared(a) {
  console.log(a*a);
}

export function cubed(a){
  console.log(a*a*a);
}

// alternative
function squared(a) {
  console.log(a*a);
}

function cubed(a){
  console.log(a*a*a);
}

export { squared, cubed };`

const importExportDefaultCode = `// functions.js module
export default function squared(a) {
  console.log(a*a);
}

// import code
import squared from "./functions"`

const importNamedExportsCode = `// functions.js module
export function squared(a) {
  console.log(a*a);
}

export function cubed(a){
  console.log(a*a*a);
}

// import code
import { squared, cubed } from "./functions"`

const componentExampleCode = `// inside App.js file
// create Title component
function Title() {
  const title = "New App";
  return (
    <p>{title}<p>
  );
}

// create App component
function App() {
  return (
    <Title />
  );
}

export default App;  // export App component`

const propsExampleCode = `// file where Greeting component is used
import Greeting from "./greeting"

function App() {
  return (
    <Greeting firstName="Sky" lastName="Deng" />
  );
}

// greeting.js
// using dot notation
function Greeting(props) {
  return (
    <p>Hello, {props.firstName} {props.lastName}</p>
  );
}

// using destructuring
function Greeting({ firstName, lastName }) {
  return (
    <p>Hello, {firstName} {lastName}</p>
  );
}`

const JSXReturnCode = `// div tag
function example() {
  return (
    <div>
      <p>Wrapped in a div tag</p>
    </div>
  );
}

// React fragments
function example() {
  return (
    <>
      <p>Wrapped in a fragment</p>
    </>
  );
}`

const JSXStylingCode = `// inline styles
export default function inlineStyles() {
  return (
    <h1 style={{color:"red", fontSize:"20px" }}>Inline styles</h1>
  );
}

// styles variables
const h1Style = {
  color: "red",
  fontSize: "20px"
};

export default function varStyles() {
  return (
    <h1 style={h1Style}>Styles variable</h1>
  );
}`

const JSXCreateComponentCode = `// declaration
function Example(props) {
  return (
    <p>{props.children}</p>
  );
}

// expression
const Example = function(props) {
  return (
    <p>{props.children}</p>
  );
}

// arrow
const Example = (props) => {
  return (
    <p>{props.children}</p>
  );
}`

const ternaryOpCode = `let weather = "Rain";

// if...else
if (weather == "Rain") {
  console.log("Stay inside");
} else {
  console.log("Go outside!");
}

// ternary operator
weather == "Rain" ? console.log("Stay inside") : console.log("Go outside!");

// example
function Ternary() {
  const age = 19;
  return (
    <>
      <p>{age >= 18 ? "Adult" : "Child"}</p>
    </>
  )
}`

const eventExampleCode = `function doAction() {
  console.log("Clicked button");
}

function eventListener() {
  return (
    // triggers doAction on button press
    <button onClick={doAction}>Click me</button>
  );
}`

const embedExpEventCode = `// assume wrapped is in a return statement
// inline anonymous ES5 function
<button onClick={function() {console.log("Clicked!"); }}>
  Content
</button>

// inline anonymous ES6 arrow function
<button onClick={() => console.log("Clicked!"); }>
  Content
</button>

// separate function declaration
function Declaration() {
  function insideDeclaration() {
    console.log("Example");
  };
  return (
    <div>
      <button onClick={insideDeclaration}>
        Content
      </button>
    </div>
  );
}

// separate function expressions
function Expression() {
  const insideExpression = () => console.log("Example");

  return (
    <div>
      <button onClick={insideExpression}>
        Content
      </button>
    </div>
  );
}`

const errorExampleCode = `try {
  console.log(item);
} catch (err) {
  console.log(\`An error occured: \${err}\`);
}`

const title = 'React Basics'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>{title}</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>React, React.js library, JSX</PostListItem>
        <PostListItem>
          Scalable, maintainable, dynamic and interactive websites
        </PostListItem>
        <PostListItem>
          Core principles of reusable component architecture and data props
        </PostListItem>
      </List>
      <PostImage src={certificate} alt="certification" />
      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents title="Setup and Structure" />
        <TableOfContents title="Modules" />
        <TableOfContents title="Components" />
        <TableOfContents title="Properties (props)" />
        <TableOfContents title="JSX" />
        <TableOfContents title="Events" />
      </List>
      <PostBigHeading>Introduction:</PostBigHeading>
      <P>
        In order to learn React, you must have a solid understanding of HTML,
        CSS, JavaScript, Node.js and npm. This is because React is built using
        JavaScript, and when building user interfaces (UI), HTML and CSS will be
        involved. Node.js and npm will be necessary to import and use other
        packages in your application. Packages are a collection of files that
        make up a module, which you can freely use in your application. If you
        are unfamiliar with HTML, CSS or JavaScript, refer to this{' '}
        <Link
          target="_blank"
          href="https://www.skydeng.com/posts/meta-react-native-specialization/intro-mobile-dev"
        >
          post
          <ExternalLinkIcon mx="2px" />
        </Link>
        . If you are unfamilar with Node.js or npm, please refer to this{' '}
        <Link
          target="_blank"
          href="https://www.skydeng.com/posts/meta-react-native-specialization/program-javascript#node.js-&-npm"
        >
          post
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </P>
      <P>
        React, developed by Meta, is an open-source library that is widely used
        for web application development. It is known for its component-based
        architecture, allowing developers to quickly create modern web
        applications and UI. React is incredibly powerful and efficient, due to
        its own Virtual DOM and use of components. It is written using
        JavaScript XML (JSX), which is a JavaScript syntax extension that allows
        you to write HTML-like code in JavaScript code. JSX promotes the use of
        components, as well as improving code readability and conciseness. The
        browser cannot understand JSX, so it needs a transpiler to transform JSX
        into JavaScript, a language the browser understands.
      </P>

      <PostSmallHeading>Setup and Structure</PostSmallHeading>
      <P>
        To get started with a React project, first install Node.js, the runtime
        environment for JavaScript. Bundled with node is npm, so there is no
        need for a separate installation. Visit the official website to download
        Node.js, at{' '}
        <Link target="_blank" href="https://nodejs.org/en">
          www.nodejs.org
          <ExternalLinkIcon mx="2px" />
        </Link>
        . Once installed, navigate to the directory you wish to have the React
        app in. Then run <IC>npm init react-app appName</IC>, where{' '}
        <IC>appName</IC> is the name of your application. It will then start
        building the React app in the <IC>appName</IC> folder it just created.
        Once it has finished building, run <IC>npm start</IC>, and your
        application will be running at the specified URL in the terminal.
      </P>
      <P>
        There are various different folders within the newly created React app.{' '}
        <IC>node_modules</IC> is where all the installed node modules are
        located. Developers typically never touch this folder themselves, but
        npm will modify it. The <IC>public</IC> folder is where you store static
        assets of your application, such as images. The source (<IC>src</IC>)
        folder is mostly you will be working, since this contains the core
        functionality; components, styles, and other assets. <IC>.gitignore</IC>{' '}
        is an important file, since this file tells git what to ignore. It will
        not track the declared files and folders. Typically, we want git to
        ignore files and folders that contain sensitive information, such as
        certain keys. The <IC>package.json</IC> files contain details about the
        project, and lists all the dependencies. A dependency is code or a
        module that is required for the project to run. Similar to the{' '}
        <IC>node_modules</IC> folder, the developer should not often be
        manipulating these files.
      </P>
      <P>
        There are numerous approaches to organizing your project code. 2 common
        methods are by features and by file type. Features can refer to various
        parts of your application; a folder for your navigation bar, a folder
        for profiles, etc. File type refers to what the function of the file
        does. Components would be stored in a components folder, webpages stored
        in a pages folder, etc. There is no right way to organize your code, but
        it is important that the organization style remains consistent in the
        project. Do not nest files too deep within folders, since that will make
        it difficult to find the appropiate folder and file.
      </P>

      <PostSmallHeading>Modules</PostSmallHeading>
      <P>
        Modules are a fundamental concept in JavaScript and React. A module is a
        file or a collection of files of related modular code. They then can be
        exported and utilized in multiple parts of your application to become
        more customizable.
      </P>
      <P>
        Modules need to be exported to allow other files in your code to utilize
        that section of code. There are 2 ways to export modules; default
        exports and named exports. The key difference is that there can only be
        1 default export per JavaScript module, whereas there can be an infinite
        amount of named exports. Below is the syntax of both export methods:
      </P>
      <CodeBox language="jsx">{exportMethodsCode}</CodeBox>
      <P>
        Once the code has been exported from the modules, in order to use them,
        you need to import them in the desired modules. Just like exporting,
        there are various ways to import modules, and they depend on how the
        module was exported. The <IC>export default</IC> method has a different
        syntax than the <IC>named export</IC> method. Below is a demonstration
        of the import syntax when using the <IC>export default</IC> method. Keep
        in mind, the text inside the quotes is just the relative path from the
        file to the module containing the component.
      </P>
      <CodeBox language="jsx">{importExportDefaultCode}</CodeBox>
      <P>
        Now for a demonstration using the <IC>named export</IC> method. Notice
        the use of curly braces around the imports. This is because you need to
        specify which exports you wish to import into the module.
      </P>
      <CodeBox language="jsx">{importNamedExportsCode}</CodeBox>

      <PostSmallHeading>Components</PostSmallHeading>
      <P>
        React has a component-based architecture, meaning software is built on
        reusable code components that can be used anywhere within the
        application. Functional components are similar to a JavaScript function.
      </P>
      <P>
        To create a component, it must be written inside a module. The first
        letter of the component name must be capitalized, since React then
        understands it is a JSX element, while all lowercase named components
        are treated as regular HTML elements. There must be a <IC>return</IC>{' '}
        statement in order for the component to render. Variables can be used,
        which was unachievable using only HTML. They are encapsulated around
        curly braces.
      </P>
      <P>
        To render a component in React, it is very similar to rendering an HTML
        element. Either it is a self closing tag (remember the &quot;/&quot;) or
        you can to encapsulate content (known as &quot;children&quot;) inside of
        it.
      </P>
      <CodeBox language="jsx">{componentExampleCode}</CodeBox>
      <ImageCaption>
        Sample components. App component is exported and renders &quot;New
        App&quot;
      </ImageCaption>
      <P>
        Currently, only the <IC>App</IC> component is reusable because it is
        using a export default in this module. If you wanted to make the{' '}
        <IC>Title</IC> component reusable, it would need to be isolated in a
        different file and exported.
      </P>

      <PostSmallHeading>Properties (props)</PostSmallHeading>
      <P>
        Props enable data transfer between components. The component sending the
        data is called the &quot;parent&quot;, and the component recieving the
        data is called the &quot;child&quot;. The data flow is one-directional;
        only the parent can communicate props to the child, the child cannot
        send props back to the parent. The syntax used to access the data within
        properties is like a JavaScript object, using dot notation. However, you
        can also directly refer to the data itself if props is destructured in
        the function paramter.
      </P>
      <CodeBox language="jsx">{propsExampleCode}</CodeBox>
      <ImageCaption>
        Greeting component renders &quot;Hello, Sky Deng&quot;
      </ImageCaption>
      <P>
        Props give developers the ability to create dynamic interfaces, since it
        allows for component data updates. The child component will then
        automatically re-render itself with the new data. This makes the whole
        application more versatile because it can consume various data and
        adjust accordingly.
      </P>
      <P>
        There is a special prop known as <IC>props.children</IC>, which is
        automatically passed in to everyone component. Whatever is written
        inside the component between the opening and closing tag, is apart of{' '}
        <IC>props.children</IC>. In the tag itself, there is no need to write{' '}
        <IC>children=&quot;&quot;</IC>, since it is implied.
      </P>

      <PostSmallHeading>JSX</PostSmallHeading>
      <P>
        Recall that JSX is just a JavaScript syntax extension, meaning it
        behaves like JavaScript. Keywords in JavaScript are still keywords in
        JSX, so different words have to be used in certain situations. For
        example, HTML elements can optionally have a <IC>class</IC> attribute
        added to them. However, <IC>class</IC> is also a keyword in JavaScript,
        so <IC>className</IC> is the replacement for <IC>class</IC> attribute in
        JSX for HTML elements. For a comprehensive list of variations in HTML
        attributes, please refer to the{' '}
        <Link
          href="https://legacy.reactjs.org/docs/dom-elements.html"
          target="_blank"
        >
          official documentation
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </P>
      <P>
        JSX is efficient at outputting HTML elements with JavaScript variables
        or dynamic data. JSX allows for embedded expressions, meaning JavaScript
        values and functions can be inserted directly into HTML of the React
        element using curly braces. If it is a function, the output of the
        function will be returned and utilized by the original element calling
        the function.
      </P>
      <P>
        If there are numerous items within components, the return statement must
        have parentheses that contain everything that is going to be rendered.
        Additionally, everything inside the return statement must be wrapped in
        a top level element, such as a <IC>&lt;div&gt;</IC> or a React fragment
        (<IC>&lt;&gt;</IC>). Either method is acceptable, it is just JSX syntax.
      </P>
      <CodeBox language="jsx">{JSXReturnCode}</CodeBox>
      <P>
        Styling JSX elements can be done in a variety of ways. One method would
        be linking a CSS stylesheet inside of the project, then create classes
        and add them to various elements using <IC>className</IC>. Another
        popular method is to save styles for an element as a variable, then pass
        it to the <IC>style</IC> attribute of the HTML element. JSX also allows
        for inline styles, which has some custom syntax, which you will see
        below.
      </P>
      <CodeBox language="jsx">{JSXStylingCode}</CodeBox>
      <P>
        Just like with styling, there are numerous ways to create components in
        React. The syntax in the examples so far are called a &quot;function
        declaration&quot;, but you can also use &quot;function expressions&quot;
        and &quot;arrow functions&quot;. In arrow functions, think of the arrow
        as a replacement for the keyword <IC>function</IC>.
      </P>
      <CodeBox language="jsx">{JSXCreateComponentCode}</CodeBox>
      <P>
        A ternary operator is an effective and more concise way to replicate an{' '}
        <IC>if...else</IC> conditional. While this feature is not exclusive to
        JSX, rather is a JavaScript feature, it is commonly used in JSX because
        of its short notation. The ternary operator consists of 2 symbols (
        <IC>?</IC> and <IC>:</IC>), a condition and 2 statements that will be
        evaluated based on if the condition is true or false. The syntax goes as
        follows: <IC>condition ? true : false</IC>. Read it as if this condition
        is true, then this will execute, else this will execute. The <IC>?</IC>{' '}
        is essentially the block of code in the <IC>if</IC> statement, while the{' '}
        <IC>:</IC> is the <IC>else</IC> block. Below is an example to better
        illustrate it.
      </P>
      <CodeBox language="javascript">{ternaryOpCode}</CodeBox>
      <ImageCaption>
        Both conditionals are equivalent. The component renders
        &quot;Adult&quot; because the condition is true
      </ImageCaption>

      <PostSmallHeading>Events</PostSmallHeading>
      <P>
        JavaScript events are when specified actions occur on a webpage and then
        a repsonse is generated. Events enable developers to create a
        interactive and dynamic UI. Some HTML attributes have unique
        functionality and are called &quot;event listeners&quot;. This is
        because some events have to &quot;wait and listen&quot; for the
        interaction to occur before executing (triggering). <IC>onClick</IC> is
        a commonly used JSX event listener, which as the name implies, is
        triggered when the user clicks on that element. For a comprehensive list
        of event listeners, please refer to the{' '}
        <Link
          href="https://legacy.reactjs.org/docs/events.html#supported-events"
          target="_blank"
        >
          official documentation
          <ExternalLinkIcon mx="2px" />
        </Link>
        .
      </P>
      <CodeBox language="jsx">{eventExampleCode}</CodeBox>
      <P>
        Clicking the button itself is the event. The event handler is the{' '}
        <IC>onClick</IC> attribute, and the action is executing the{' '}
        <IC>doAction</IC> function, which logs &quot;Clicked button&quot; to the
        console.
      </P>
      <P>
        Like previously mentioned, you can embed expressions in JSX using curly
        braces. A common location to embed expressions is in event handlers.
        There are numerous different ways to achieve this: an inline anonymous
        function, a separate function declaration or a separate function
        expression. Inline functions are concise and do not need to be reused
        elsewhere. Function declarations and expressions make the JSX code more
        readable by splitting the rendered components from the event action,
        while also allowing the function to be reused.
      </P>
      <CodeBox language="javascript">{embedExpEventCode}</CodeBox>
      <P>
        With any programming environment or language, errors are an inevitable
        part of the development process. JavaScript comes with built-in error
        handling syntax, using <IC>try</IC> and <IC>catch</IC>. JavaScript will
        first execute the <IC>try</IC> block. If it creates an error, the{' '}
        <IC>catch</IC> statement stores it in a variable of your choice (most
        people use <IC>err</IC>), then executes the <IC>catch</IC> block of
        code. It is common to log the error to the console for debugging
        purposes.
      </P>
      <CodeBox language="javascript">{errorExampleCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

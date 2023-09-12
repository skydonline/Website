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
  TableOfContents,
  B
} from '../../../components/posts'

import certificate from '../../../public/images/posts/react-basics-cert.jpeg'
import { ELink } from '../../../components/home'

const componentsCode = `// Header.js
import { View, Text } from "react-native";

export default function HComponent() {
  return (
    <View>
      <Text>Header Component</Text>
    </View>
  );
}

// App.js
import { View } from "react-native";
import HComponent from "./components/Header";

export default function App() {
  return (
    <View 
      style={{
        flex: 1, 
        justifyContent: "flex-start", 
        padding: 30
      }}>
      <HComponent />
    </View>
  );
}`

const scrollViewCode = `import { View, Text, ScrollView } from "react-native";

function ScrollComponent() {
  return (
    <View style={{flex: 1}}>
      <ScrollView 
        horizontal={false}
        style={{
          paddingVertical: 50,
          backgroundColor: "#fff"
        }}>
          <Text>Item 1</Text>
          <Text>Item 2</Text>
          <Text>Item 3</Text>
          <Text>Item 4</Text>
      </ScrollView>
    </View>
  );
}`

const stylesheetCode = `import { StyleSheet } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  }
})`

const flatListCode = `import { View, Text, FlatList } from 'react-native';

const data = [
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" },
  { id: 3, text: "Item 3" },
];

function renderItem({ item }){
  return (
    <View>
      <Text>{item.text}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View>
      <FlatList 
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}`

const sectionListCode = `import { View, Text, SectionList } from 'react-native';

const data = [
  { title: 'Section 1', 
    data: [
      'Item 1',
      'Item 2',
      'Item 3',
    ],
  },
  { title: 'Section 2', 
    data: [
      'Item 4',
      'Item 5',
      'Item 6',
    ],
  },
];


export default function App() {

  function renderItem({ item }){
    return (
      <View>
        <Text>{item.text}</Text>
      </View>
    );
  }

  function renderSectionHeader({section: {title} }) {
    return (
      <Text>{title}</Text>
    );
  }

  return (
    <View>
      <SectionList 
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
}`

const textInputCode = `import { TextInput, View, Text } from 'react-native';

export default function Inputs() {
    const [firstName, onChangeFirstName] = useState("");
    const [lastName, onChangeLastName] = useState("");
    const [phoneNumber, onChangePhoneNumber] = useState("");

    return (
      <View>
        <Text>Below is some input fields.</Text>
        <TextInput 
          value={firstName} 
          onChangeText={onChangeFirstName} 
        />
        <TextInput 
          value={lastName} 
          onChangeText={onChangeLastName} 
        />
        <TextInput 
          value={phoneNumber} 
          onChangeText={onChangePhoneNumber}
          keyboardType="phone-pad"
        />
      </View>
    );
}`

const title = 'React Native'

const Work = () => (
  <Layout title={title}>
    <Container>
      <Title>{title}</Title>
      <PostBigHeading>Main Learnings:</PostBigHeading>
      <List>
        <PostListItem>
          React Native, React Native libraries, JavaScript and JSX
        </PostListItem>
        <PostListItem>Expo CLI, Android and iOS emulator</PostListItem>
        <PostListItem>
          React Native navigation, large lists, user input and interactivity
        </PostListItem>
      </List>
      <PostImage src={certificate} alt="certification" />
      <PostBigHeading>Table of Contents</PostBigHeading>
      <List>
        <TableOfContents title="Setup and Structure" />
        <TableOfContents title="Components" />
        <TableOfContents title="Styling" />
        <TableOfContents title="Lists" />
        <TableOfContents title="Input" />
      </List>

      <PostBigHeading>Introduction:</PostBigHeading>
      <P>
        In order to learn React Native, you must have a solid understanding of
        HTML, CSS, JavaScript, Node.js and npm. Knowing React would be an asset.
        React Native is built using JavaScript, and when building user
        interfaces (UI), HTML and CSS will be involved. Node.js and npm will be
        necessary to import and use other packages in your application. Packages
        are a collection of files that make up a module, which you can freely
        use in your application. If you are unfamiliar with HTML, CSS or
        JavaScript, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/intro-mobile-dev">
          post
        </ELink>
        . If you are unfamilar with Node.js or npm, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/program-javascript#node.js-&-npm">
          post
        </ELink>
        . If you wish to learn React, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/react-basics">
          post
        </ELink>
        .
      </P>
      <P>
        React Native, developed by Meta, is an open-source library that is
        widely used for mobile application development. It is popular due to its
        ability to utilize one codebase that works on both iOS and Android
        devices, using fully native components. The JavaScript is translated
        into the platform&apos;s native code, allowing for high performance and
        efficiency of the application.
      </P>
      <P>
        React Native saves time, costs, and allows for quicker development by
        utilizing one codebase. Instead of 2 separate teams to develop 2 mobile
        apps, only 1 team needs to be hired. This eliminates the need for
        constant communication between teams, increases development of the
        application and reduces the time to market. Another benefit is that if
        you understand React, React Native is very similar and can be picked up
        very quickly. Vice versa, if you learn React Native, React can be
        quickly learned.
      </P>

      <PostSmallHeading>Setup and Structure</PostSmallHeading>
      <P>
        To get started with a React Native project, first install Node.js, the
        runtime environment for JavaScript. Bundled with node is npm, so there
        is no need for a separate installation. Visit the official website to
        download Node.js, at{' '}
        <ELink href="https://nodejs.org/en">www.nodejs.org</ELink>.
      </P>
      <P>
        The 2 most popular development environments for React Native is Expo and
        the React Native CLI. Expo is quicker and easier to work for beginners,
        but the React Native CLI offers more customization and control of the
        application. For more information, visit the{' '}
        <ELink href="https://reactnative.dev/docs/environment-setup">
          official website
        </ELink>
        . This post will cover Expo, since it is more simple. Once installed,
        navigate to a directory you wish to have the app in. Then run{' '}
        <IC>npx create-expo-app appName</IC>, where <IC>appName</IC> is the name
        of your application. It will start building the React Native app in the{' '}
        <IC>appName</IC> folder it just created. Once it has finished building,
        run <IC>cd appName</IC> to go into the folder. Run{' '}
        <IC>npx expo start</IC> to run your application.
      </P>
      <P>
        Expo allows developers to easily build a native app for iOS and Android
        with one codebase, using JavaScript and React; there is no need for
        native platform code (e.g. Swift for iOS, Java for Android). Developers
        can also access the native APIs of the device, such as the camera,
        location services, push notifications, etc. However, keep in mind that
        it does not support every device API, and you should consult
        documentation to confirm which APIs are available.
      </P>
      <P>
        An emulator simulates what the app experience is like on that mobile
        platform. It is incredibly useful because it mimics the user experience
        of your application on that desired platform without having to purchase
        the physical device. iOS emulators can only be run on macOS devices,
        whereas Android emulators can be run on any device. Expo also has the
        Metro Bundler, which bundles the JavaScript into native code. It
        provides a QR code that you can scan on your mobile device that will run
        the app. Ensure you have the Expo Go app downloaded prior to scanning
        the QR code.
      </P>

      <PostSmallHeading>Components</PostSmallHeading>
      <P>
        React Native components are similar to React components; reusable,
        modular pieces of code. In React Native, there are core components,
        community components, and your own custom native components. Core
        components come with the React Native package, and translate into native
        components without native code. Community components need to be
        downloaded, and are developed by the community, but enables more app
        functionality. Custom native components need to be written in native
        code and integrated into the project, but should only be used for
        personal unqiue cases. Often times you can find libraries for all your
        components. The process to utilize components in React Native are just
        like React components; import the components into your desired file.
        Commonly used core components include <IC>View</IC>, <IC>Text</IC>,{' '}
        <IC>FlatList</IC>, but there are numerous ones available. Components can
        be given styling information using the <IC>style</IC> attribute. The{' '}
        <IC>style</IC> attributes are similar to the ones found in HTML, but are
        slightly modified.
      </P>
      <CodeBox language="jsx">{componentsCode}</CodeBox>
      <P>
        As the name suggests, the <IC>View</IC> component is what the user sees
        on their device. It is the layout of the mobile screen, like a HTML{' '}
        <IC>div</IC> element. The <IC>Text</IC> component displays text similar
        to a HTML <IC>p</IC> element. These are essential components to any
        React Native application.
      </P>
      <P>
        <IC>ScrollView</IC> is an important component in React Native, since it
        allows for scrolling of items on the device. It needs to be bounded by a
        height, so it is not an endless scrolling component. There are numerous
        paramters that can be passed in to adjust the <IC>ScrollView</IC>, such
        as <IC>horizontal</IC>, which makes the component scroll horizontally.
      </P>
      <CodeBox language="javascript">{scrollViewCode}</CodeBox>

      <PostSmallHeading>Styling</PostSmallHeading>
      <P>
        Using inline styles for components may be convenient, but makes the code
        appear more messy. This is where <IC>StyleSheet</IC> comes in; it
        extracts styles from components, and keeps all the styles together,
        similar to a CSS stylesheet. It is typically assigned to the{' '}
        <IC>styles</IC> constant, and each object within <IC>styles</IC> is
        named after the particular component it will be assigned to.
        Additionally, styles are now reusable if you want multiple components to
        have the same style.
      </P>
      <CodeBox language="javascript">{stylesheetCode}</CodeBox>

      <PostSmallHeading>Lists</PostSmallHeading>
      <P>
        When creating large lists in React Native, using the <IC>ScrollView</IC>{' '}
        component is not ideal, since it has to render all of its child
        components before the app loads. This can lead to poor performance and
        slower rendering times for larger lists. For situations like this, the{' '}
        <IC>FlatList</IC> component is useful due to its lazy rendering; it only
        renders the list items when they need to appear on the screen. It has{' '}
        <IC>data</IC> and <IC>renderItem</IC> as required props. <IC>data</IC>{' '}
        is an array of items the list will take, while <IC>renderItem</IC> is a
        function that determines how each item is rendered to the screen.{' '}
        <IC>keyExtractor</IC> is a useful prop because it allows React to
        identify components to optimize rendering; it can cache items, and only
        re-render items if it has changed.
      </P>
      <CodeBox language="javascript">{flatListCode}</CodeBox>
      <P>
        <IC>SectionList</IC> is another component that can be used to render
        lists with sections. It is similar to <IC>FlatList</IC>, but enables
        separation of items in the list, instead of a long uninterrupted list.
        The required props are <IC>sections</IC> which is an array of list
        sections, and <IC>renderItem</IC> which renders the item. The
        <IC>renderSectionHeader</IC> prop identifies and renders the appropiate
        section header.
      </P>
      <CodeBox language="javascript">{sectionListCode}</CodeBox>

      <PostSmallHeading>Input</PostSmallHeading>
      <P>
        <IC>TextInput</IC> is a commonly used component for users to input text
        into the application via their native keyboard. The <IC>placeholder</IC>{' '}
        prop is what displays in the input field prior to any input.{' '}
        <IC>keyboardType</IC> determines the type of keyboard that pops up for
        the user, which for example, can be useful if you only want the user to
        input numbers. <IC>value</IC> and <IC>onChangeText</IC> can be used in
        combination with <IC>useState</IC> to update a variable based on the
        contents of the input field. For more details on the <IC>TextInput</IC>{' '}
        component, visit the{' '}
        <ELink href="https://reactnative.dev/docs/textinput">
          offical documentation
        </ELink>
        .
      </P>
      <CodeBox language="javascript">{textInputCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

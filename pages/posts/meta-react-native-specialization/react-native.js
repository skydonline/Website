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

const pressableCode = `import { View, Text, Pressable } from 'react-native';
import { useState } from 'react';

export default function Menu() {
  return (
    <View>
      <Pressable onPressIn={() => {
        setShowMenu(!showMenu)
        }}>
          <Text>{showMenu : "Home" ? "Menu"}</Text>
      </Pressable>
      {!showMenu && (
        <>
          <Text>Showing the home screen</Text>
        </>
      )}
      {showMenu && (
        <>
          <Text>Showing the menu screen</Text>
        </>
      )}
    </View>
  );
}`

const imageCode = `import { View, Image, Text, StyleSheet } from 'react-native';
// import local image
import Logo from '../public/logo.png';

export default function RenderImage() {
  return (
    <View>
      <Image source={Logo} style={styles.logo} />
      <Text>The logo is rendered above</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
  }
})`

const colorSchemeCode = `import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function Color() {
  const colorScheme = useColorScheme();
  return (
    <View
      style={[
        styles.container,
        colorScheme === 'light'
          ? {backgroundColor: '#fff'}
          : {backgroundColor: '#333333'}
    ]}>
      <Text>
        The background color changes
      </Text>
    </View>
  );
}`

const windowDimensionsCode = `import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

function Window() {
  const styles = getStyles();

  return (
    <>
      <View style={styles.container}>
        <Text>Some text in a box</Text>
      </View>
    </>
  );
}

function getStyles() {
  const {width, height, fontScale} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      height: height > 100 ? 100 : 50,
      width: width > 100 ? 100 : 50,
    }
  })
}

export default Window;`

const stackNavigatorCode = `import { NavigationContainer } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Screen1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`

const navigationPropCode = `// navigate method
<Button onPress={() => navigation.navigate('Home')}>
  Go to Home screen
</Button>

// push method
<Button onPress={() => navigation.push('Home')}>
  Go to Home screen and add to navigation history stack
</Button>

// goBack method
<Button onPress={() => navigation.goBack()}>
  Go to previous screen in navigation history stack
</Button>

// popToTop method
<Button onPress={() => navigation.popToTop()}>
  Go to initial screen
</Button>`

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
        <TableOfContents title="Images" />
        <TableOfContents title="Hooks" />
        <TableOfContents title="React Navigation" />
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

      <P>
        <IC>Pressable</IC> is a core component in React Native that is wrapped
        around a child component, and then can detect the users press
        interactions on that component. The <IC>onPressIn</IC> prop is called
        when the user presses on the element, and the <IC>onPressOut</IC> prop
        is called when the user is no longer pressing on that element.{' '}
        <IC>onLongPress</IC> is called when when the user holds on the pressable
        for more than 500ms, but the time interval can be changed with{' '}
        <IC>delayLongPress</IC>. A common use case is for updating the local
        state of a variable, such as toggling the display of some content.
      </P>
      <CodeBox language="javascript">{pressableCode}</CodeBox>

      <PostSmallHeading>Images</PostSmallHeading>
      <P>
        Visual components such as images elevate the application. The{' '}
        <IC>Image</IC> component allows you to render numerous types of images:
        from local project resources, external web images or even images from
        the user (e.g. camera roll). The mandatory <IC>source</IC> prop
        determines the location of the image source that is rendered. The{' '}
        <IC>style</IC> prop should be added to render the image appropiately.
      </P>
      <CodeBox language="javascript">{imageCode}</CodeBox>
      <P>
        There are numerous other props that can be passed into the{' '}
        <IC>Image</IC> component. <IC>resizeMode</IC> is a commonly used prop,
        that determines how the image is resized when the window frame does not
        match the image dimensions. To account for accessibility, set the{' '}
        <IC>accessible</IC> prop to be <IC>true</IC> and set{' '}
        <IC>accessibilityLabel</IC> to a be description for the image. For more
        props and details, visit the{' '}
        <ELink href="https://reactnative.dev/docs/image">
          official documentation
        </ELink>
        .
      </P>
      <P>
        <IC>ImageBackground</IC> allows other components to be rendered ontop of
        the image. The <IC>source</IC> prop is required to render the image, and
        inherits all the props from the <IC>Image</IC> component.
      </P>

      <PostSmallHeading>Hooks</PostSmallHeading>
      <P>
        Just like in React, there are hooks in React Native that allow you to
        hook into state and features from other components. For a refresher on
        hooks, refer to this{' '}
        <ELink href="https://www.skydeng.com/posts/meta-react-native-specialization/react-basics#hooks">
          post
        </ELink>
        .
      </P>
      <P>
        <IC>useColorScheme</IC> listens to color scheme updates from the users
        device. The values can be &quot;light&quot;, &quot;dark&quot;, or
        &quot;null&quot;. A common convention is to name the constant{' '}
        <IC>colorScheme</IC>.
      </P>
      <CodeBox language="javascript">{colorSchemeCode}</CodeBox>
      <P>
        <IC>useWindowDimensions</IC> extracts the current window or screen
        dimensions of the device and the users font scale preference. This
        information can be used to create a responsive layout and enable better
        formatting of the content based on the display it is being rendered on.
        Some layouts may work on larger screens but not on smaller screens, so
        the developer can create a separate layout for those users.
      </P>
      <CodeBox language="javascript">{windowDimensionsCode}</CodeBox>
      <ImageCaption>
        Notice the different syntax; remember that hooks can only be called
        within functional components, so <IC>export default</IC> must be at the
        bottom of the file
      </ImageCaption>
      <P>
        There are numerous other community hooks that can be used within your
        application from the React Native community. To install these community
        hooks, run <IC>npm install @react-native-community/hooks</IC>. There are
        many useful hooks, such as <IC>useAppState</IC> which keeps track if the
        application is in focus or in the background,{' '}
        <IC>useDeviceOrientation</IC> which checks for if the user is in
        landscape or portrait mode, and numerous others. For more details, visit
        their{' '}
        <ELink href="https://github.com/react-native-community/hooks">
          GitHub page
        </ELink>
        .
      </P>

      <PostSmallHeading>React Navigation</PostSmallHeading>
      <P>
        Navigation or routing is the process of moving between screens. React
        Navigation is a popular library used in React Native for customizable
        navigation. A stack navigator can be used to transition between various
        screens and manage the navigation history, so the user can go to the
        previous screen. To use React Navigation, first install the necessary
        dependencies. For more details, visit the{' '}
        <ELink href="https://reactnavigation.org/docs/getting-started/">
          official documentation
        </ELink>
        . Assign the constant <IC>Stack</IC> to{' '}
        <IC>createNativeStackNavigator()</IC>. Then import and wrap the entire
        application around a <IC>NavigationContainer</IC> component. Inside the
        component, wrap all screens in a <IC>Stack.Navigator</IC> component. A
        prop to change the default screen is <IC>initialRouteName</IC>, which
        can be assigned a screen. If each screen will have the same props, use
        the <IC>screenOptions</IC> prop. It is recommened to hide each header,
        using <IC>headerShown: false</IC>. For each new screen of your
        application, create a self-closing <IC>Stack.Screen</IC> component, with
        props of <IC>name</IC> and <IC>component</IC>. <IC>name</IC> takes in
        the name of the screen a string, and <IC>component</IC> takes in the
        actual component screen.
      </P>
      <CodeBox language="javascript">{stackNavigatorCode}</CodeBox>
      <P>
        To navigate to a specific screen, a component can utilize the{' '}
        <IC>navigation</IC>prop. For example, a <IC>button</IC> component can
        have its <IC>onPress</IC> prop set to an anonymous or arrow function
        that sets <IC>navigation.navigate</IC> to the screen name.{' '}
        <IC>navigation.push</IC> navigates to the desired screen and adds it to
        the stack. The main difference between <IC>navigate</IC> and{' '}
        <IC>push</IC> is the latter only pushes the screen to the stack if it
        does not exist on it already. <IC>goBack</IC> navigates to the previous
        screen in the navigation history, while <IC>popToTop</IC> returns to the
        initial screen.
      </P>
      <CodeBox language="javascript">{navigationPropCode}</CodeBox>
    </Container>
  </Layout>
)

export default Work

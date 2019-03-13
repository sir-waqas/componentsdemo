//Import App Registry, View and Text from React Native Library
import { AppRegistry, View, Text } from 'react-native';
//Import React for Behaviours from React
import React from 'react';
//Import the Header and Footer file to use it in the Root View
import Header from './src/components/Header';
import Footer from './src/components/Footer';

//Root Functional Component to Init the App
const ComponentsDemo = () => (
    //First View with Styling to center items containing a Text View 
    <View style={{ flex: 1, alignContent: "center", alignContent: "center" }}>
        {/* <Text>My Resume</Text> */}
        <Header headerText={'Resume App'} />
        {/* Main Resume Content to be inserted here */}
        <Footer footerText={'CopyRights 2019'} />
    </View>
);

AppRegistry.registerComponent('componentsdemo', () => ComponentsDemo);
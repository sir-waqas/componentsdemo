// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//Import App Registry, View and Text from React Native Library
import { AppRegistry, View, Text } from 'react-native';
//Import React for Behaviours from React
import React from 'react';

//Root Functional Component to Init the App
const ComponentsDemo = () => (
    //First View with Styling to center items containing a Text View 
    <View style={{ flex: 1 }}>
        {/* <Text>My Resume</Text> */}
        <Header headerText={'Resume App'} />
    </View>
);

AppRegistry.registerComponent('componentsdemo', () => ComponentsDemo);
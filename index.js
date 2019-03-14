//Import App Registry, View and Text from React Native Library
import { AppRegistry, View, ScrollView } from 'react-native';
//Import React for Behaviours from React
import React from 'react';
//Import the Header, Content and Footer files to use it in the Root View
import Header from './src/components/Header';
import ProfilePic from './src/components/ProfilePic';
import Summary from './src/components/Summary';
import Experience from './src/components/Experience';
import Education from './src/components/Education';
import Footer from './src/components/Footer';

//Root Functional Component to Init the App
const ComponentsDemo = () => (
    //First View with Styling to center items containing a Text View 
    <ScrollView style={{ flex: 1, flexDirection: 'column' }}>

        {/* <Text>My Resume</Text> */}
        <Header headerText={'Personal Information App'} />
        {/* Main Resume Content to be inserted here */}
        <View>
            <ProfilePic />
            <Summary summaryHeading={'Summary'} summary={'Summary place holder'} />
            <Experience expHeading={'Experience'} experience={'Placeholder'} />
            <Education eduHeading={'Education'} education={'Placeholder'} />
            <Footer footerText={'CopyRights 2019'} />
        </View>
    </ScrollView>
);

AppRegistry.registerComponent('componentsdemo', () => ComponentsDemo);
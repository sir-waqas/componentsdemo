//Imports
import { Text, View } from 'react-native';
import React from 'react';

//Prepare the contents
const Header = (props) => {
    return (
        <View>
            <Text>{props.headerText}</Text>
        </View>
    );
};

//Style the contents
const styles = {};

//Make them available to the app
export default Header;
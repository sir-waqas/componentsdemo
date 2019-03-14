//Imports with Destructuring
import { Text, View } from 'react-native';
import React from 'react';

//Prepare the contents
const Experience = (props) => {
    //Destructuring the styles
    const { headingStyle, textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={headingStyle}>{props.expHeading}</Text>
            <View style={viewStyle}>
                <Text style={textStyle}>{props.experience}</Text>
                <Text style={textStyle}>{props.experience}</Text>
                <Text style={textStyle}>{props.experience}</Text>
            </View>
        </View>
    );
};

//Style the contents
//Style the contents
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyConents: 'center',
        alignItems: 'center',
        height: 150,
        paddingTop: 15,
        position: 'relative'
    },
    headingStyle: {
        fontSize: 16,
        backgroundColor: 'white'
    },
    textStyle: {
        fontSize: 12
    }
};

//Make them available to the app
export default Experience;
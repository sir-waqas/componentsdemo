//Imports with Destructuring
import { Image, View } from 'react-native';
import React from 'react';

//Prepare the contents
const ProfilePic = (props) => {
    //Destructuring the styles
    const { imgStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Image style={imgStyle} source={require('./../img/pak.jpg')} />
        </View>
    );
};

//Style the contents
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyConents: 'center',
        alignItems: 'center',
        height: 250,
        paddingTop: 15,
        position: 'relative'
    },
    imgStyle: {
        height: 200,
        width: 200
    }
};

//Make them available to the app
export default ProfilePic;
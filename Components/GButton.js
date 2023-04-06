import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Button } from 'react-native-paper';

const {width, height} = Dimensions.get('screen');

export default function GButton({title, icon, modeValue, color, ...rest}) {
    return (
        <Button
            mode = {modeValue}
            {...rest}
            icon = {icon}
            style = {styles.button}
            contentStyle = {styles.buttonContainer}>
            {title}
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
    },
    buttonContainer: {
        width: width*0.85,
        height: height/17,
    },
});

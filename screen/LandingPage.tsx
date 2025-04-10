import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text
} from 'react-native';
import { images } from './assets';

function LandingPage() {
    return (
        <ImageBackground source={images.building} style={styles.sectionContainer}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText} >See List</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    buttonContainer: {
        height: 70,
        width: "80%",
        borderRadius: 30,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        opacity :0.7
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize : 22
    }
});

export default LandingPage;

import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text
} from 'react-native';
import { images } from './assets';
import { useNavigation } from '@react-navigation/native';


function LandingPage() {
    const navigation: any = useNavigation();

    const createBusiness = () => {
        navigation.navigate("CreateBusiness");
    };

    const createArticle = () => {
        navigation.navigate("CreateArticle");
    };


    const listBusiness = () => {
        navigation.navigate("ListBusiness");
    };

    return (
        <ImageBackground source={images.building} style={styles.sectionContainer}>
            <TouchableOpacity onPress={createBusiness} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create Business</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={createArticle} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Create Article</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={listBusiness} style={styles.buttonContainer}>
                <Text style={styles.buttonText} >See Business List</Text>
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

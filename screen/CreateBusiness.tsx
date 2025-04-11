import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text,
    TextInput,
    Image,
    View
} from 'react-native';
import { images } from './assets';
import { useNavigation } from '@react-navigation/native';

function CreateBusiness() {
    const navigation: any = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const submit = () => {
    };

    return (
        <ImageBackground source={images.building} style={styles.sectionContainer}>
            <TouchableOpacity style={{ marginTop: 50, width: 40 }} onPress={goBack}>
                <Image style={{ height: 30, width: 30 }} source={images.back}></Image>
            </TouchableOpacity>
            <TextInput
                style={styles.createInput}
                placeholderTextColor={'black'}
                placeholder="Enter Your Business Name"
            />
            <View style={styles.createButton}>
                <TouchableOpacity onPress={submit} style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Create Business</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 15
    },
    buttonContainer: {
        height: 70,
        width: "80%",
        borderRadius: 30,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22
    },
    createInput: {
        fontWeight: "900",
        marginTop: 30,
        fontSize: 22,
        textDecorationLine: "underline",
        textAlign: "center"
    },
    createButton: {
        flex: 1,
        marginBottom: 20,
        justifyContent: "flex-end",
        alignItems: "center"
    }
});

export default CreateBusiness;

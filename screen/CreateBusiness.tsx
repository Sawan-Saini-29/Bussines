import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text,
    TextInput,
    Image,
    View,
    Alert
} from 'react-native';
import { images } from './assets';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function CreateBusiness() {
    const navigation: any = useNavigation();
    const [name, setName] = useState("");

    const goBack = () => {
        navigation.goBack();
    };

    const submit = async () => {
        if (name != "") {
            const uniqueID = Date.now().toString(36) + Math.random().toString(36).substring(2)
            let BusniessCreate = {
                id: uniqueID,
                name: name
            }
            const existingList = await AsyncStorage.getItem("BusinessList");
            let businessArray = [];
            if (existingList !== null) {
                businessArray = JSON.parse(existingList);
            }
            businessArray.push(BusniessCreate);
            await AsyncStorage.setItem("BusinessList", JSON.stringify(businessArray));
            Alert.alert(
                `Busniess Created \nBusniess ID :- ${uniqueID}`,        // Alert title
                'Please Create Artical using this busniess ID', // Alert message
                [
                    {
                        text: 'OK',
                        onPress: () => goBack(),
                    },
                ],
                { cancelable: false } // Optional: prevent dismissing by tapping outside
            );
        }
        else {
            Alert.alert("PLease Enter Business Name")
        }
    };

    const changeText = (text: string) => {
        setName(text)
    };

    return (
        <ImageBackground source={images.building} style={styles.sectionContainer}>
            <TouchableOpacity style={{ marginTop: 50, width: 40 }} onPress={goBack}>
                <Image style={{ height: 30, width: 30 }} source={images.back}></Image>
            </TouchableOpacity>
            <TextInput
                value={name}
                style={styles.createInput}
                placeholderTextColor={'black'}
                placeholder="Enter Your Business Name"
                onChangeText={(text: string) => { changeText(text) }}
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

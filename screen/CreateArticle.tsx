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

function CreateArticle() {
    const navigation: any = useNavigation();
    const [busniessId, setBusniessId] = useState("")
    const [articalName, setArticalName] = useState("");
    const [quantity, setQuantity] = useState(-1);
    const [price, setPrice] = useState(-1);



    const goBack = () => {
        navigation.goBack();
    };

    const submit = async () => {
        if (busniessId == "") {
            Alert.alert("Please Enter Busniess ID ")
            return
        }
        if (articalName == "") {
            Alert.alert("Please Enter Articale Name")
            return
        }
        if (quantity === -1) {
            Alert.alert("Please Enter Quantity")
            return
        }
        if (price === -1) {
            Alert.alert("Please Enter Selling Price")
            return
        }

        const uniqueID = Date.now().toString(36) + Math.random().toString(36).substring(2);

        let articalCreate = {
            id: uniqueID,
            name: articalName,
            qty: quantity,
            selling_price: price,
            business_id: busniessId
        }

        const existingDataStr = await AsyncStorage.getItem("ArticleList");
        let fullArticleData: any = {};

        if (existingDataStr !== null) {
            fullArticleData = JSON.parse(existingDataStr);
        }

        if (!fullArticleData[busniessId]) {
            fullArticleData[busniessId] = [];
        }

        fullArticleData[busniessId].push(articalCreate);

        await AsyncStorage.setItem("ArticleList", JSON.stringify(fullArticleData));

        Alert.alert(
            `Article Created`,
            'Article has been added successfully!',
            [
                {
                    text: 'OK',
                    onPress: () => goBack(),
                },
            ],
            { cancelable: false }
        );



    };

    const textBusniessId = (text: string) => {
        setBusniessId(text);
    };

    const textName = (text: string) => {
        setArticalName(text);
    };

    const textQye = (text: string) => {
        setQuantity(Number(text));
    };

    const textPrice = (text: string) => {
        setPrice(Number(text));
    };

    return (
        <ImageBackground source={images.building} style={styles.sectionContainer}>
            <TouchableOpacity style={{ marginTop: 50, width: 40 }} onPress={goBack}>
                <Image style={{ height: 30, width: 30 }} source={images.back}></Image>
            </TouchableOpacity>

            <TextInput
                value={busniessId}
                style={styles.createInput}
                placeholderTextColor={'black'}
                placeholder="Enter Business ID"
                onChangeText={textBusniessId}
            />
            <TextInput
                value={articalName}
                style={styles.createInput}
                placeholderTextColor={'black'}
                placeholder="Enter Your Article Name"
                onChangeText={textName}
            />
            <TextInput
                value={quantity != -1 ? String(quantity) : ""}
                style={styles.createInput}
                placeholderTextColor={'black'}
                placeholder="Enter Your Article Quantity"
                keyboardType="numeric"
                onChangeText={textQye}
            />
            <TextInput
                value={price != -1 ? String(price) : ""}
                style={styles.createInput}
                placeholderTextColor={'black'}
                placeholder="Enter Your Selling Price per Quantity"
                keyboardType="numeric"
                onChangeText={textPrice}
            />
            <View style={styles.createButton}>
                <TouchableOpacity onPress={submit} style={styles.buttonContainer}>
                    <Text style={styles.buttonText} >Create Article</Text>
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

export default CreateArticle;

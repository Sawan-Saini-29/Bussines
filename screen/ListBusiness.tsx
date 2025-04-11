import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text,
    Image,
    FlatList,
    View,
    Alert
} from 'react-native';
import { images } from './assets';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';

function ListBusiness() {
    const navigation: any = useNavigation();
    const [listBusiness, setlistBusiness] = useState([]);

    useEffect(() => {
        const fetchBusinessList = async () => {
            try {
                const existingList = await AsyncStorage.getItem("BusinessList");
                if (existingList !== null) {
                    const businessArray = JSON.parse(existingList);
                    setlistBusiness(businessArray)
                } else {
                    Alert.alert("No businesses List found yet.");
                }
            } catch (error) {
                console.error("Failed to fetch business list:", error);
            }
        };

        fetchBusinessList();
    }, []);

    const goBack = () => {
        navigation.goBack();
    };

    const copyString = (id: string) => {
        Clipboard.setString(id);
    };

    const checkArticale = async (id : string) => {
        await AsyncStorage.setItem("CurrentBusniessId", id);
        navigation.navigate("ArticaleList");
    };

    const flatListRenderItem = (item: any) => {
        return (
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={() => checkArticale(item.id)} style={styles.buttonContainer}>
                    <Text style={styles.buttonTextList}> Name :- {item.name}</Text>
                    <Text style={styles.buttonTextList}>Busniess ID :- {item.id}</Text>
                    <View style={{flexDirection : 'row',justifyContent :'center', alignItems : "center"}}>
                    <Text style={styles.buttonTextList}>Copy ID </Text>
                    <TouchableOpacity style={{ marginTop: 5, width: 40,marginLeft : 10 }} onPress={() => copyString(item.id)}>
                        <Image style={{ height: 30, width: 30, tintColor: "white" }} source={images.copy}></Image>
                    </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const listRender = () => {
        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <FlatList
                    data={listBusiness}
                    renderItem={({ item }) => flatListRenderItem(item)}
                    showsVerticalScrollIndicator={false}
                ></FlatList>
            </View>
        )

    }

    return (
        <ImageBackground source={images.building} style={styles.sectionContainer}>
            <TouchableOpacity style={{ marginTop: 50, width: 40 }} onPress={goBack}>
                <Image style={{ height: 30, width: 30 }} source={images.back}></Image>
            </TouchableOpacity>
            <Text style={styles.buttonText}>Business List</Text>
            {listRender()}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        paddingHorizontal: 15
    },
    buttonContainer: {
        padding : 10,
        borderRadius: 30,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
    },
    buttonText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "black",
        fontSize: 22,
        marginTop: 20
    },
    buttonTextList: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        fontSize: 22,
    }
});

export default ListBusiness;

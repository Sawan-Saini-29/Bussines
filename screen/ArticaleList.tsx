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

function ArticaleList() {
    const navigation: any = useNavigation();
        const [listArticale, setlistArticale] = useState([]);
    
    useEffect(() => {
        const fetchBusinessList = async () => {
            try {
                const existingList = await AsyncStorage.getItem("ArticleList");
                const currentTargetId = await AsyncStorage.getItem("CurrentBusniessId");
                if (existingList !== null && currentTargetId !== null) {
                    const businessArray = JSON.parse(existingList);
                    const targetId = currentTargetId;
                    let articlesForBusiness = [];
                    if (businessArray.hasOwnProperty(targetId)) {
                        articlesForBusiness = businessArray[targetId];
                    } else {
                        Alert.alert("No articles found for this business ID.");
                    }
                    setlistArticale(articlesForBusiness)
                } else {
                    Alert.alert("No Article List found yet.");
                }
            } catch (error) {
                console.error("Failed to fetch business list:", error);
            }
        };

        fetchBusinessList();
    }, []);

    const goBack = () => {
        navigation.goBack()
    };

    const flatListRenderArtical = (item: any, index : number) => {
        return (
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                    <Text style={styles.buttonTextList}>Artical Name :- {item.name}</Text>
                    <Text style={styles.buttonTextList}>Artical Quntity :- {item.qty}</Text>
                    <Text style={styles.buttonTextList}>Per Artical Price :- {item.selling_price} RS</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const listRenderArtical = () => {
        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <FlatList
                    data={listArticale}
                    renderItem={({ item , index}) => flatListRenderArtical(item,index)}
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
            <Text style={styles.buttonText}>Artical List</Text>
            {listRenderArtical()}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        paddingHorizontal: 15
    },
    buttonContainer: {
        borderRadius: 30,
        backgroundColor: "blue",
        margin: 10,
        opacity: 0.7,
        padding: 10
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
        color: "white",
        fontSize: 22,
        marginLeft: 20,
        marginTop: 10
    }
});

export default ArticaleList;

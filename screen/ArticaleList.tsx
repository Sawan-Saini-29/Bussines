import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Text,
    Image,
    FlatList,
    View
} from 'react-native';
import { images } from './assets';
import { useNavigation } from '@react-navigation/native';

function ArticaleList() {
    const navigation: any = useNavigation();

    const goBack = () => {
        navigation.goBack()
    };

    const flatListRenderArtical = (item: any, index : number) => {
        return (
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity disabled={true} style={styles.buttonContainer}>
                <Text style={[styles.buttonTextList, {textAlign : "center"}]}>Artical Number :- {index+1}</Text>
                    <Text style={styles.buttonTextList}>Artical Name :- {item.name}</Text>
                    <Text style={styles.buttonTextList}>Artical Quntity :- {item.qty}</Text>
                    <Text style={styles.buttonTextList}>Per Artical Price :- {item.selling_price} RS</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const listRenderArtical = () => {
        const listBusiness = [
            {
                id: "1",
                name: "Shirt",
                qty: 10,
                selling_price: 100,
            },
            {
                id: "2",
                name: "bat",
                qty: 100,
                selling_price: 10000,
            },
            {
                id: "3",
                name: "cycle",
                qty: 5,
                selling_price: 10,
            },
            {
                id: "4",
                name: "bike",
                qty: 5,
                selling_price: 10,
            },
            {
                id: "5",
                name: "roller",
                qty: 5,
                selling_price: 10,
            },
            {
                id: "6",
                name: "pen",
                qty: 5,
                selling_price: 10,
            },
        ]

        return (
            <View style={{ flex: 1, marginTop: 30 }}>
                <FlatList
                    data={listBusiness}
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

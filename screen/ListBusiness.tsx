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

function ListBusiness() {
    const navigation: any = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    const checkArticale = () => {
        navigation.navigate("ArticaleList");
    };

    const flatListRenderItem = (item: any) => {
        return (
            <View style={{ marginTop: 10 }}>
                <TouchableOpacity onPress={checkArticale} style={styles.buttonContainer}>
                    <Text style={styles.buttonTextList}>{item.businessName}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const listRender = () => {
        const listBusiness = [
            {
                businessId: 1,
                businessName: "Amazon"
            },

            {
                businessId: 2,
                businessName: "TATA"
            },

            {
                businessId: 3,
                businessName: "Birla"
            },
            {
                businessId: 4,
                businessName: "NRK"
            },
            {
                businessId: 5,
                businessName: "JIO"
            },
            {
                businessId: 6,
                businessName: "FlipKart"
            },
        ]

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
        height: 70,
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

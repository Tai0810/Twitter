import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const NewMessage = ({ navigation, route }) => {

    const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(url + route.params?.id)
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, [route])

    return (
        <View style={styles.container}>
            <View style={styles.headerBar}>
                <Pressable onPress={() => {
                    navigation.goBack();
                }}>
                    <Image source={require('../assets/back.png')} style={styles.back}></Image>
                </Pressable>
                <Text style={styles.title}> New Message</Text>
                <Text></Text>
            </View>

            <View style={styles.searchArea}>
                <Image source={require('../assets/search.png')} style={styles.searchImage}></Image>
                <TextInput style={styles.searchInput} placeholder='Search for people and groups'></TextInput>
            </View>

            <ScrollView>
                <FlatList data={user.home} renderItem={({ item }) => {
                    return (
                        <View style={styles.messArea}>
                            <Image source={item.avt} style={styles.avtMes}></Image>
                            <View style={{ marginLeft: 5 }}>
                                <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</Text>
                                <Text style={{ fontSize: 16, fontWeight: 400, color: '#687684' }}>@{item.name}</Text>
                            </View>
                        </View>
                    )
                }}>

                </FlatList>

            </ScrollView>
        </View>
    )
}

export default NewMessage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7ECF0',
        fontFamily: 'Inter',
    },
    headerBar: {
        flexDirection: 'row',
        backgroundColor: 'white',
        // paddingLeft: 18,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    back: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
    },
    title: {
        width: 286,
        fontFamily: 'inter',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 800,
    },
    searchArea: {
        flexDirection: 'row',
        width: '100%',
        height: 45,
        paddingVertical: 10,
        paddingLeft: 15,
        alignItems: 'center',
    },
    searchImage: {
        width: 14,
        height: 14,
        resizeMode: 'contain',
    },
    searchInput: {
        marginLeft: 15,
        width: 350,
        height: 40,
        color: '#687684',
        fontSize: 17,
        fontWeight: 400,
    },
    messArea: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: 20,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#CED5DC',
    },
    avtMes: {
        width: 37,
        height: 37,
        resizeMode: 'contain',
        borderRadius: 45,
    }
})
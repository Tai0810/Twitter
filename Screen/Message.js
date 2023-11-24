import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Message = ({ navigation, route }) => {

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
                <Pressable
                    onPress={() => {
                        navigation.navigate('Profile', { id: route.params.id })
                    }}>
                    <Image source={user.avatar} style={styles.avt}></Image>
                </Pressable>
                <Text style={styles.title}>Messages</Text>
                <Image source={require('../assets/setting.png')} style={styles.setting}></Image>
            </View>

            <Pressable style={styles.searchArea}>
                <Image source={require('../assets/search.png')} style={styles.searchImage}></Image>
                <TextInput style={styles.searchInput} placeholder='Search for people and groups'></TextInput>
            </Pressable>

            <ScrollView>
                <FlatList data={user.mess} renderItem={({ item }) => {
                    return (
                        <View style={styles.messArea}>
                            <Image source={item.avt} style={styles.avtMes}></Image>
                            <View style={{ marginLeft: 5, width: 320, height: 55 }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{width: 250, flexDirection: 'row'}}>
                                        <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name} </Text>
                                        <Text style={{ color: 'grey', fontSize: 16}}>@{item.name}</Text>
                                    </View>
                                    <Text style={{ color: 'grey', fontSize: 16 }}>{item.date}</Text>
                                </View>
                                <Text style={{ color: 'grey', fontSize: 16 }}>You: {item.text}</Text>
                            </View>
                        </View>
                    )
                }}>
                </FlatList>
            </ScrollView>


            <Pressable style={styles.newTwi}
                onPress={() => {
                    navigation.navigate('NewMessage', {id: route.params.id})
                }}>
                <Image source={require('../assets/newMes.png')} style={styles.addIcon}></Image>
            </Pressable>
        </View>
    )
}

export default Message

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        fontFamily: 'Inter'
    },
    headerBar: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%'
    },
    avt: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        borderRadius: 45,
    },
    title: {
        width: 286,
        fontFamily: 'inter',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 800,
    },
    setting: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    newTwi: {
        width: 56,
        height: 56,
        backgroundColor: '#4C9EEB',
        position: 'absolute',
        top: 600,
        left: 340,
        borderRadius: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        width: 24,
        height: 22,
        resizeMode: 'contain',
    },
    searchArea: {
        backgroundColor: '#E7ECF0',
        width: 382,
        height: 32,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
        marginBottom: 10,
    },
    searchImage: {
        width: 13,
        height: 13,
        resizeMode: 'contain',
    },
    searchInput: {
        width: 350,
        height: 30,
        marginLeft: 5,
        color: 'grey',
        // outline: 'none',
    },
    messArea: {
        width: 414,
        height: 80,
        flexDirection: 'row',
        // marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: 'lightgrey',
    },
    avtMes: {
        width: 55,
        height: 55,
        resizeMode: 'contain',
        borderRadius: 45
    }
})
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

const Search = ({ navigation, route }) => {

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
                    navigation.navigate('Profile', {id: route.params.id})
                }}>
                    <Image source={user.avatar} style={styles.avt}></Image>
                </Pressable>
                <TextInput style={styles.inputSearch} placeholder='Search Twitter'>
                </TextInput>
                <Image source={require('../assets/setting.png')} style={styles.setting}></Image>
            </View>

            <View style={styles.trends}>
                <Text style={styles.trendTittle}>Trends for you</Text>
            </View>

            <View style={styles.notifiArea}>
                <Text style={styles.nofiTitle}>No new trends for you</Text>
                <Text style={styles.nofiText}>It seems like there's not a lot to show you right now, but you can see trends for other areas</Text>
                <Pressable style={styles.changePress}>Change location</Pressable>
            </View>

            <Pressable style={styles.newTwi}
            onPress={() => {
                navigation.navigate("Twetting", {id: route.params.id})
              }}>
                <Image source={require('../assets/newTwt.png')} style={styles.addIcon}></Image>
            </Pressable>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7ECF0',
        fontFamily:'Inter'
    },
    headerBar: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    avt: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
        borderRadius: 45,
    },
    inputSearch: {
        width: 286,
        height: 32,
        backgroundColor: '#E7ECF0',
        borderRadius: 16,
        color: 'grey',
        fontFamily: 'inter',
        textAlign: 'center',
        fontSize: 17,
    },
    setting: {
        width: 22,
        height: 22,
        resizeMode: 'contain',
    },
    searchImage: {
        width: 13,
        height: 13,
        resizeMode: 'contain',
    },
    trends: {
        // width: '100%',
        height: 48,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        paddingLeft: 25,
        backgroundColor: 'white',
    },
    trendTittle: {
        fontSize: 18,
        fontWeight: 800,
        fontFamily: 'inter',
    },
    notifiArea: {
        height: 200,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    nofiTitle: {
        fontSize: 22,
        fontWeight: 800,
        fontFamily: 'inter',
        marginTop: 35,
    },
    nofiText: {
        fontSize: 16,
        fontWeight: 400,
        color: '#687684',
        textAlign: 'center',
        width: 346,
        fontFamily: 'inter',
        marginTop: 15,
    },
    changePress: {
        backgroundColor: '#4C9EEB',
        width: 136,
        height: 34,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        fontSize: 14,
        fontWeight: 600,
        color: '#FFFFFF',
        fontFamily: 'inter',
        marginTop: 20,
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
    }
})
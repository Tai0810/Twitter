import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Notification_All from './Notification_All';
import Notification_Mentions from './Notification_Mentions';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';


const Notifications = ({ navigation, route }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "first", title: "All" },
        { key: "second", title: "Mention" },
    ]);

    const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
    const [user, setUser] = useState({});
    const id = route.params.id;

    const renderScene = SceneMap({
        first: () => <Notification_All id={id} />,
        second: () => <Notification_Mentions id={id} />
    });

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
                <Text style={styles.title}>Notifications</Text>
                <Image source={require('../assets/setting.png')} style={styles.setting}></Image>
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={(props) => {
                    return (
                        <TabBar
                            {...props}
                            style={styles.tabBar}
                            onIndexChange={setIndex}
                            labelStyle={styles.labelStyle}
                            indicatorStyle={styles.indicatorStyle}
                        ></TabBar>
                    )
                }}
            ></TabView>

            <Pressable style={styles.newTwi}
                onPress={() => {
                    navigation.navigate("Twetting", { id: route.params.id })
                }}>
                <Image source={require('../assets/newTwt.png')} style={styles.addIcon}></Image>
            </Pressable>

        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7ECF0',
        fontFamily: 'Inter'
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
    tabBar: {
        backgroundColor: "#FFFFFF",
        alignItems: "center",
    },
    labelStyle: {
        color: "#687684",
        fontSize: 13,
    },
    indicatorStyle: {
        backgroundColor: "#4C9EEB",
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
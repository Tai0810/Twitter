import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Profile_Tw from './Profile_Tw';
import Profile_Rep from './Profile_Rep';
import Profile_Media from './Profile_Media';
import Profile_Like from './Profile_Like';


const Profile = ({ navigation, route }) => {

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: "first", title: "Bài viết" },
        { key: "second", title: "Đăng lại" },
        { key: "third", title: "Video" },
        { key: "four", title: "Thích" }
    ]);

    const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
    const [user, setUser] = useState({});

    const id = route.params.id;

    const renderScene = SceneMap({
        first: () => <Profile_Tw id={id} />,
        second: () => <Profile_Rep id={id} />,
        third: () => <Profile_Media id={id} />,
        four: () => <Profile_Like id={id} />
    });

    useEffect(() => {
        fetch(url + route.params?.id)
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, [route])

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '140px', backgroundColor: '#1F1F1F', flexDirection: 'row', }}>
                <View style={{}}>
                    <Pressable style={{ width: '32px', height: '32px', backgroundColor: '#0F0F0F', borderRadius: '50%', marginTop: '20px', marginLeft: ' 20px' }}
                        onPress={() => {
                            navigation.goBack();
                        }}>
                        <Image
                            style={{ width: '7.82px', height: '14px', marginTop: '5px', zIndex: '10', tintColor: 'white', marginTop: '9px', marginLeft: '11px' }}
                            source={require('../assets/angle-left.svg')}
                        />
                    </Pressable>
                </View>
            </View>

            <View style={{ width: '100%', height: '222px', backgroundColor: 'white' }}>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>

                    <Image
                        style={{ width: '66px', height: '66px', zIndex: '10', marginTop: '9px', marginLeft: '20px', borderColor: 'white', marginTop: '-25px', borderRadius: '50%', borderWidth: '3px' }}
                        source={user.avatar}
                    />
                    <Pressable style={{ width: '130px', height: '32px', borderWidth: '1px', borderColor: '#1D9BF0', borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginRight: '20px' }}>
                        <Text style={{ color: '#1D9BF0', fontWeight: '800' }}>Chỉnh sửa hồ sơ</Text>
                    </Pressable>
                </View>
                <View>
                    <Text style={{ fontWeight: '800', fontSize: '22px', marginLeft: '20px', marginTop: '8px' }}>
                        {user.name}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '20px', marginTop: '5px', color: 'gray' }}>
                        @{user.name}
                    </Text>
                </View>
                <View style={{ width: '350px' }}>
                    <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '20px', marginTop: '10px', color: 'black' }}>
                        {user.decription}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: '10px', marginLeft: '20px' }}>
                    <Image
                        style={{ width: '14.3px', height: '14.69px', zIndex: '10' }}
                        resizeMode='contain'
                        source={require('../assets/Link Icon.svg')}
                    />
                    <Text style={{ color: '#1D9BF0', marginLeft: '8px' }}>
                        {user.name}.io
                    </Text>
                </View>
                <View style={{ marginLeft: '20px', marginTop: '10px', flexDirection: 'row' }}>
                    <Text style={{ fontWeight: 800 }}>
                        {user.following}
                        <Text style={{ marginLeft: '5px', fontWeight: '400', color: 'gray' }}>
                            Following
                        </Text>
                    </Text>

                    <Text style={{ fontWeight: 800, marginLeft: '15px' }}>
                        {user.follower}
                        <Text style={{ marginLeft: '5px', fontWeight: '400', color: 'gray' }}>
                            Followers
                        </Text>
                    </Text>
                </View>
            </View>

            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={(props) => {
                    return (
                        <TabBar
                            {...props}
                            style={styles.tabBar}
                            labelStyle={styles.labelStyle}
                            indicatorStyle={styles.indicatorStyle}
                            getLabelStyle={({ focused }) => ({
                                color: focused ? "#687684" : "#4C9EEB",
                            })}
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

export default Profile

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'flex-start',
        flex: 1,
        // alignItems: 'flex-start',
        backgroundColor: 'white',
        fontFamily: 'Inter'
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
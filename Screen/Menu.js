import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

const Menu = ({ navigation, route }) => {

    const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(url + route.params?.id)
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, [route])

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '50px', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginLeft: '20px' }}>

                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontWeight: '800' }}>
                        Menu
                    </Text>
                </View>
                <View>
                    <Image
                        style={{ width: '20px', height: '20px', marginTop: '15px', marginRight: '20px' }}

                        source={require('../assets/Union (1).svg')}
                    />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
                <Image
                    style={{ width: '66px', height: '66px', marginTop: '15px', borderRadius: '50%' }}

                    source={user.avatar}
                />
                <Text style={{ marginTop: '10px', fontWeight: '800', fontSize: '19px' }}>
                    {user.name}
                </Text>
                <Text style={{ marginTop: '5px', fontWeight: '400', fontSize: '16px', color: 'gray' }}>
                    @{user.name}
                </Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: '10px' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '600', fontSize: '16px' }}>
                        {user.following}
                    </Text>
                    <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px' }}>
                        Theo dõi
                    </Text>
                    <Text style={{ fontWeight: '600', fontSize: '16px', marginLeft: '20px' }}>
                        {user.follower}
                    </Text>
                    <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px' }}>
                        Người theo dõi
                    </Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: '30px', marginLeft: '20px', alignItems: 'center' }}>
                    <Pressable style={{ flexDirection: 'row' }}
                    onPress={() => {
                        navigation.navigate("Profile", {id: route.params.id})
                    }}>
                        <Image
                            style={{ width: '16.5px', height: '20.5px' }}

                            source={require('../assets/Profile Stroke Icon.svg')}
                        />
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Thông tin cá nhân
                        </Text>
                    </Pressable>

                </View>
                <View style={{ flexDirection: 'row', marginTop: '30px', marginLeft: '20px', alignItems: 'center' }}>
                    <Pressable style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: '20px', height: '20px' }}

                            source={require('../assets/Lists icon.svg')}
                        />
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Bài đăng
                        </Text>
                    </Pressable>

                </View>
                <View style={{ flexDirection: 'row', marginTop: '30px', marginLeft: '20px', alignItems: 'center' }}>
                    <Pressable style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: '17.75px', height: '22.28px' }}

                            source={require('../assets/Topics Stroke Icon.svg')}
                        />
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Chủ đề
                        </Text>
                    </Pressable>

                </View>
                <View style={{ flexDirection: 'row', marginTop: '30px', marginLeft: '20px', alignItems: 'center' }}>
                    <Pressable style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: '18px', height: '20px' }}

                            source={require('../assets/Bookmarks icon.svg')}
                        />
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Đã lưu
                        </Text>
                    </Pressable>

                </View>
                <View style={{ flexDirection: 'row', marginTop: '30px', marginLeft: '20px', alignItems: 'center' }}>
                    <Pressable style={{ flexDirection: 'row' }}>
                        <Image
                            style={{ width: '14.33px', height: '21.11px' }}

                            source={require('../assets/Moments icon.svg')}
                        />
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Khoảnh khắc
                        </Text>
                    </Pressable>

                </View>
                <View style={{ marginTop: '50px' }}>
                    <Pressable>
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Cài đặt và quyền riêng tư
                        </Text>
                    </Pressable>

                </View>
                <View style={{ marginTop: '30px' }}>
                    <Pressable>
                        <Text style={{ fontWeight: '400', fontSize: '19px', marginLeft: '15px' }}>
                            Trung tâm trợ giúp
                        </Text>
                    </Pressable>

                </View>
            </ScrollView>

        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Inter',
        flex: 1,
        backgroundColor: 'white'
    }
})
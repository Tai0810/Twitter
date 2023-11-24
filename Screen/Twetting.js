import { Pressable, StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'

const Twetting = ({ navigation, route }) => {

    const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(url + route.params?.id)
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, [route])

    return (
        <View style={styles.container}>
            <View style={{ marginTop: '20px', justifyContent: 'space-between', flexDirection: 'row' }}>
                <Pressable style={{ marginLeft: '20px' }}
                    onPress={() => {
                        navigation.goBack();
                    }}>
                    <Text style={{ fontWeight: '400', color: '#1D9BF0', fontSize: '16px' }}>
                        Hủy
                    </Text>
                </Pressable>
                <Pressable style={{ marginRight: '20px', width: '70px', height: '35px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#1D9BF0', borderRadius: '20px' }}>
                    <Text style={{ fontWeight: '400', color: 'white', fontSize: '16px' }}>
                        Đăng
                    </Text>
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', }}>
                <Image
                    style={{ width: '50px', height: '50px', marginTop: '25px', borderRadius: '50%', marginLeft: '20px' }}

                    source={user.avatar}
                />
                <TextInput editable
                    multiline
                    numberOfLines={4}
                    maxLength={240}
                    placeholder='Ngày hôm nay của bạn như thế nào ?'

                    style={{ width: '320px', marginLeft: '10px', marginTop: '25px', height: '200px', padding: '10px', borderWidth: '1px', borderColor: 'white', outline: 'none', fontSize: '16px', color: 'gray' }}>

                </TextInput>
            </View>
            <View style={{ height: '100px', marginTop: '30px', borderColor: 'lightgray', borderWidth: '1px', padding: '10px', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Pressable style={{ width: '80px', height: '80px', borderWidth: '1px', borderColor: 'lightgray', borderRadius: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: '20px', height: '20px' }}
                        resizeMode='contain'
                        source={require('../assets/Camera icon.svg')}
                    />
                </Pressable>
                <Pressable style={{ width: '80px', height: '80px', borderWidth: '1px', borderColor: 'lightgray', borderRadius: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                        // resizeMode='contain'
                        source={require('../assets/businessman-relaxing-office.jpg')}
                    />
                </Pressable>
                <Pressable style={{ width: '80px', height: '80px', borderWidth: '1px', borderColor: 'lightgray', borderRadius: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                        // resizeMode='contain'
                        source={require('../assets/modern-round-desk-fan-with-simple-background.jpg')}
                    />
                </Pressable>
                <Pressable style={{ width: '80px', height: '80px', borderWidth: '1px', borderColor: 'lightgray', borderRadius: '10px', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ width: '80px', height: '80px', borderRadius: '10px' }}
                        // resizeMode='contain'
                        source={require('../assets/woman-warming-up-hands-near-heater.jpg')}
                    />
                </Pressable>
            </View>
        </View>
    )
}

export default Twetting

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Inter',
        flex: 1,
        backgroundColor: 'white'
    }
})
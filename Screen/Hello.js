import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'


export default function Hello({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text
                        style={styles.text_happ}>
                        Happening now
                    </Text>
                    <Text
                        style={styles.text_join}>
                        Join today.
                    </Text>

                </View>
            </View>
            <View style={styles.content}>
                <Pressable style={styles.button}>
                    <Image
                        style={styles.logo_login}
                        source={require('../assets/google.png')}
                    />
                    <Text>
                        Sign up with Google
                    </Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Image
                        style={styles.logo_login}
                        source={require('../assets/apple-logo.png')}
                    />
                    <Text>
                        Sign up with Apple ID
                    </Text>
                </Pressable>
                <View style={styles.or}>
                    <Text style={styles.text_or}>
                        or
                    </Text>
                    <View style={styles.line}>

                    </View>
                </View>
                <Pressable style={styles.button_acc} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.but_cre}>
                        Create account
                    </Text>
                </Pressable>


            </View>
            <View style={styles.pollicy}>
                <Text style={styles.text_pol}>
                    By signing up, you agree to the Terms of Service and Privacy Pollicy, including Cookie Use.
                </Text>
            </View>
            <View style={styles.text_are} >
                <Text style={styles.tetx_arere}>
                    Already have an account?
                </Text>
            </View>
            <View>
                <Pressable style={styles.button_sign}
                onPress={()=>{
                    navigation.navigate("Sigin")
                }
                }
                >
                    <Text style={styles.text_sign}>
                        Sign in
                    </Text>
                </Pressable>
            </View>
            

        </View>

    );

}




const styles = StyleSheet.create({
    container: {
        fontFamily: 'Inter',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },
    or: {
        margin: '10px', alignItems: 'center'
    },
    logo: {
        width: '120px',
        height: '120px',

    },
    button: {
        width: '300px',
        height: '40px',
        fontWeight: 500,
        borderWidth: '1px',
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        borderRadius: '100px',
        flexDirection: 'row',
    },
    button_acc: {
        width: '300px',
        height: '40px',
        fontWeight: 500,
        borderWidth: '1px',
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        borderRadius: '100px',
        flexDirection: 'row',
        backgroundColor: '#1D9BF0'
    },
    logo_login: {
        width: '20px',
        height: '20px',
        marginRight: '15px',

    },
    pollicy: {
        width: '300px',
        margin: '10px',

    },
    button_sign: {
        width: '300px',
        height: '40px',
        fontWeight: 500,
        borderWidth: '1px',
        borderColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        borderRadius: '100px',
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    text: {
        fontWeight: 600, 
        fontSize: '15px', 
        color: '#1D9BF0'
    },
    header: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text_happ: {
        fontFamily: "Inter",
        fontSize: '40px',
        marginTop: '50px',
        fontWeight: '800'
    },
    text_join: {
        fontFamily: "Inter",
        fontSize: '25px',
        marginTop: '20px',
        fontWeight: '800'
    },
    content: {
        marginTop: '90px'
    },
    text_or: {
        width: '20px', 
        backgroundColor: 'white', 
        textAlign: 'center'
    },
    line: {
        width: '300px', 
        height: '1px', 
        backgroundColor: "lightgray", 
        position: 'absolute', 
        marginTop: '11px', 
        zIndex: '-10'
    },
    but_cre:{
        fontWeight: 600, fontSize: '15px', color: 'white'
    },
    text_pol:{
        fontSize: '11px'
    },
    text_are:{
        marginVertical: '10px', marginTop: '20px', width: '300px'
    },
    text_arereL:{
        fontSize: '15px', fontWeight: 600
    }


})
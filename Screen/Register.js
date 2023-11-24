import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const Register = ({ navigation, route }) => {
  const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  return (
    <View style={styles.container}>

      <View style={{ width: '300px' }}>
        <Pressable style={{ flexDirection: 'row', alignItems: 'flex-start' }}
          onPress={() => {
            navigation.navigate('Hello')
          }}
        >
          <Image
            style={{ width: '10px', height: '10px', marginTop: '5px' }}
            source={require('../assets/angle-left.svg')}
          />
          <Text style={{ marginLeft: '10px' }}>Quay lại</Text>
        </Pressable>
      </View>


      <View style={{ width: '350px', alignItems: 'center', marginTop: '50px' }}>
        <Text style={styles.title}>
          Create your account
        </Text>
      </View>
      <View style={{ marginTop: '30px', width: '300px' }}>
        <Text style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', width: '50px', marginLeft: '10px', textAlign: 'center', fontWeight: '600' }}>
          Name
        </Text>
        <TextInput style={styles.input} onChangeText={setName}>

        </TextInput>
      </View>

      <View style={{ marginTop: '15px', width: '300px' }}>
        <Text style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', width: '50px', marginLeft: '10px', textAlign: 'center', fontWeight: '600' }}>
          Phone
        </Text>
        <TextInput style={styles.input} onChangeText={setPhone}>

        </TextInput>
      </View>

      <View style={{ marginTop: '15px', width: '300px' }}>
        <Text style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', width: '70px', marginLeft: '10px', textAlign: 'center', fontWeight: '600' }}>
          Password
        </Text>
        <TextInput style={styles.input} onChangeText={setPassword}>

        </TextInput>
      </View>
      <View style={{ marginTop: '15px', width: '300px' }}>
        <Text style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', width: '120px', marginLeft: '10px', textAlign: 'center', fontWeight: '600' }}>
          Confirm Password
        </Text>
        <TextInput style={styles.input} onChangeText={setPassword2}>

        </TextInput>
      </View>

      <View style={{ width: '300px', justifyContent: 'space-between', margin: '20px', flexDirection: 'row' }}>
        <Text style={{ color: 'red' }}>{error}</Text>
        <Text style={{ color: '#1D9BF0' }}>
          Use email instead
        </Text>
      </View>
      <View>
        <Pressable style={styles.button_sign}
          onPress={() => {
            fetch(url)
              .then((response) => response.json())
              .then((json) => {
                var arr = json.filter((item) => item.phone === phone);
                if (arr.length === 0) {
                  if (password === password2) {
                    fetch(url, {
                      method: 'POST',
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        phone: phone,
                        password: password,
                        avatar: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FECV9JydUwAE9OY1.png&tbnid=Ini8L68Xzif-ZM&vet=12ahUKEwjlwr3P-NuCAxUHplYBHfAxD2oQMygAegQIARBL..i&imgrefurl=https%3A%2F%2Ftwitter.com%2FTHasdasi&docid=vS3Zn6XRFMPUoM&w=500&h=500&itg=1&q=avatar%20mac%20dinh%20twitter&ved=2ahUKEwjlwr3P-NuCAxUHplYBHfAxD2oQMygAegQIARBL",
                        name: name,
                        following: 0,
                        follower: 0,
                        decription: "",
                        mess: "",
                        home: "",
                        notiAll: "",
                        rep: "",
                        video: "",
                        like: ""
                      })
                    })
                    navigation.navigate("Sigin");
                  } else setError("Mật khẩu không giống nhau!");
                } else setError("Số điện thoại đã được dùng!");
              });
          }}
        >
          <Text style={styles.text_sign}>
            Create account
          </Text>
        </Pressable>
      </View>

      <View>
        <Pressable style={styles.button_sign_2}
          onPress={() => {
            navigation.navigate("Sigin")
          }}
        >
          <Text style={{ fontWeight: '600', color: '#1D9BF0' }}>
            Sign in
          </Text>
        </Pressable>
      </View>





    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'Inter'
  },
  title: {
    fontSize: '30px',
    marginTop: '50px',
    fontWeight: '800'

  },
  input: {
    marginTop: '10px',
    width: '300px',
    height: '50px',
    borderWidth: '1px',
    borderColor: 'lightgray',
    borderRadius: '10px',
    padding: '20px',
    color: 'gray'

  },
  button_sign: {
    width: '300px',
    height: '40px',
    fontWeight: 500,
    borderWidth: '1px',
    borderColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    borderRadius: '100px',
    flexDirection: 'row',
    backgroundColor: '#1D9BF0'
  },
  text_sign: {
    fontWeight: '600',
    color: 'white'
  },
  button_sign_2: {
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
  back: {
    width: '10px',
    height: '10px',
    margin: '5px',
    marginRight: '10px'
  }



})
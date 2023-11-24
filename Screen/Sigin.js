import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'

const Sigin = ({ navigation, route }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState("")
  return (
    <View style={styles.container}>

      <View style={{}}>
        <Text style={{ fontSize: '30px', fontWeight: '800', textAlign: 'center',}}>
          Đăng nhập
        </Text>


      </View>
      <View style={{ marginTop: '50px', width: '300px' }}>
        <Text style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', width: '100px', marginLeft: '10px', textAlign: 'center', fontWeight: '600' }}>
          Số điện thoại
        </Text>
        <TextInput style={styles.input} onChangeText={setPhone}>
        </TextInput>
      </View>
      <View style={{ marginTop: '35px', width: '300px' }}>
        <Text style={{ position: 'absolute', zIndex: '10', backgroundColor: 'white', width: '70px', marginLeft: '10px', textAlign: 'center', fontWeight: '600' }}>
          Mật khẩu
        </Text>
        <TextInput style={styles.input} onChangeText={setPassword}>
        </TextInput>
      </View>
      <View style={{ width: '300px', flexDirection: 'row', justifyContent: 'space-between', marginTop: '10px' }}>
      <Text style={{color: 'red'}}>{error}</Text>
        <Text style={{}}>
          Quên mật khẩu ?
        </Text>
      </View>
      <View>
        <Pressable style={styles.button_sign_2}
          onPress={() => {
            fetch("https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP")
              .then((response) => response.json())
              .then((json) => {
                var arr = json.filter((item) => item.phone === phone);
                if (arr.length != 0) {
                  if (arr[0].password === password) {
                    navigation.navigate("TabScreen",{id:arr[0].id});
                  } 
                  else setError("Sai mật khẩu!");
                } 
                else setError("Sai số điện thoại!");
              });
          }}
        >
          <Text style={{ fontWeight: '600', color: 'white' }}>
            Sign in
          </Text>
        </Pressable>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '20px' }}>
          <Text>Bạn chưa có tài khoản ? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Register")
            }}
          >
            <Text style={{ fontWeight: '600', color: '#1D9BF0' }}>
              Đăng ký
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Sigin

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'Inter'
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
  button_sign_2: {
    width: '300px',
    height: '40px',
    fontWeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    borderRadius: '100px',
    flexDirection: 'row',
    backgroundColor: '#1D9BF0'
  },

})
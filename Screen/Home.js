import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'


const Home = ({ navigation, route }) => {

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
        <View style={{ width: 286, alignItems: 'center' }}>
          <Image source={require('../assets/xlogo.png')} style={styles.logo}></Image>
        </View>
        <Image source={require('../assets/feature.png')} style={styles.feature}></Image>
      </View>

      <ScrollView>
        <FlatList data={user.home} renderItem={({ item }) => {
          return (
            <Pressable style={styles.twArea}
            onPress={() => {
              navigation.navigate('TweetDetail', {item})
            }}>
              <Image source={item.avt} style={styles.avtTw}></Image>
              <View style={{ marginLeft: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ width: 300, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name} </Text>
                    <Text style={{ fontSize: 16, fontWeight: 400, color: '#687684' }}>@{item.name} </Text>
                    <Text style={{ fontSize: 16, fontWeight: 400, color: '#687684' }}> -{item.time}</Text>
                  </View>
                  <Image source={require("../assets/downRow.png")} style={{ width: 15, height: 15, resizeMode: 'contain' }}></Image>
                </View>
                <Text style={{ fontSize: 16, fontWeight: 400, width: 300 }}>{item.text}</Text>
                {
                  item.image &&
                  <Image source={item.image} style={{ width: 300, height: 200, borderRadius: 10, marginTop: 5}} />
                }
                <View style={{ flexDirection: 'row', marginTop: 5, alignItems: 'center', justifyContent:'space-between', width:'300px', marginTop:'5px'}}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Image source={require('../assets/Comment Stroke Icon.svg')}style={{width: 15, height: 15, resizeMode: 'contain', marginTop:'3px'}}></Image>
                    <Text style={{fontSize: 15, color:'gray'}}> {item.comment}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/Retweet Stroke Icon.svg')}style={{width: 20, height: 20, resizeMode: 'contain'}}></Image>
                    <Text style={{fontSize: 15, color:'gray'}}> {item.reply}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Image source={require('../assets/heartStoke.svg')}style={{width: 15, height: 15, resizeMode: 'contain', marginTop:'3px'}}></Image>
                    <Text style={{fontSize: 15, color:'gray'}}> {item.like}</Text>
                  </View>
                  <Image source={require('../assets/Share stroke icon.svg')}style={{width: 15, height: 15, resizeMode: 'contain'}}></Image>

                </View>
              </View>
            </Pressable>
          )
        }}>

        </FlatList>
      </ScrollView>


      <Pressable style={styles.newTwi}
        onPress={() => {
          navigation.navigate("Twetting", { id: route.params.id })
        }}>
        <Image source={require('../assets/newTwt.png')} style={styles.addIcon}></Image>
      </Pressable>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E7ECF0',
    backgroundColor: '#FFFFFF',
    fontFamily:'Inter'
  },
  headerBar: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#E7ECF0',
  },
  avt: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    // backgroundColor: 'pink',
    borderRadius: 45,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  feature: {
    width: 23,
    height: 23,
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
  twArea: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#E7ECF0',
    flexDirection: 'row',
  },
  avtTw: {
    width: 55,
    height: 55,
    resizeMode: 'contain',
    borderRadius: 45
  },
})
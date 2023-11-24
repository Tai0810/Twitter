import { StyleSheet, Text, View, TextInput, Image, Pressable, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const Notification_All = (props) => {
  const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url + props.id)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [props])

  return (
    <View style={styles.container}>

      <ScrollView>
        <FlatList data={user.notiAll} renderItem={({ item }) => {
          return (
            <View style={{ paddingTop: 15, backgroundColor: 'white', paddingBottom: 5 }}>
              <View style={{ flexDirection: 'row', marginLeft: 50 }}>
                <Image source={require('../assets/star.png')} style={{ width: 24, height: 24 }}></Image>
                <Image source={item.avt} style={{ width: 37, height: 37, marginLeft: 10, borderRadius: 45 }}></Image>
              </View>

              <View style={{ flexDirection: 'row', marginLeft: 85, marginTop: 5 }}>
                <Text style={{ fontSize: 16, color: '#687684' }}>In case you missed </Text>
                <Text style={{ fontSize: 16, fontWeight: 600 }}>{item.name}</Text>
                <Text style={{ fontSize: 16, color: '#687684' }}>'s Tweet </Text>
              </View>

              <Text style={{ fontSize: 16, color: '#687684', marginLeft: 85, width: 300 }}>{item.text}</Text>
            </View>

          )
        }}>

        </FlatList>
        {/* <View style={{ paddingTop: 15, backgroundColor: 'white', paddingBottom: 5 }}>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Image source={require('../assets/star.png')} style={{ width: 24, height: 24 }}></Image>
            <Image source={require('../assets/avt2.png')} style={{ width: 37, height: 37, marginLeft: 10 }}></Image>
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 85, marginTop: 5 }}>
            <Text style={{ fontSize: 16, color: '#687684' }}>In case you missed </Text>
            <Text style={{ fontSize: 16, fontWeight: 600 }}>Saad Drusteer</Text>
            <Text style={{ fontSize: 16, color: '#687684' }}>'s Tweet </Text>
          </View>

          <Text style={{ fontSize: 16, color: '#687684', marginLeft: 85, width: 300 }}>🔥 Are you using WordPress and migrating to the JAMstack? I wrote up a case study about how Smashing Magazine moved to JAMstack and saw great performance improvements and better security.</Text>

          <Text style={{ fontSize: 16, color: '#687684', marginLeft: 85, marginTop: 20 }}>smashingdrusteer.com/2020/01/migrat...</Text>
        </View> */}

      </ScrollView>

      <Pressable style={styles.newTwi}>
        <Image source={require('../assets/newTwt.png')} style={styles.addIcon}></Image>
      </Pressable>
    </View>
  )
}

export default Notification_All

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECF0',
    fontFamily: 'Inter'
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
  tabZone:
  {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'white'
  },
  all: {
    fontSize: 16,
    fontWeight: 600,
    color: '#4C9EEB',
    borderBottomWidth: 2,
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#4C9EEB',
  },
  mention: {
    fontSize: 16,
    fontWeight: 600,
    color: '#687684',
    // borderBottomWidth: 1,
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
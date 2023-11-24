import { StyleSheet, Text, View, Image, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

const Notification_Mentions = (props) => {
  const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(url + props.id)
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, [props])
  return (
    <View style={styles.container}>
            {/* <View style={{width: '100%', height: 'auto', backgroundColor: 'white' }}> */}
            <ScrollView >
                <FlatList data={user.video} renderItem={({ item }) => {
                    return (
                        <Pressable 
                        // onPress={() => {navigation.navigate("TweetDetail")}}
                        >
                            <View style={{ width: '100%', marginLeft: '20px', marginTop: '10px' }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: '55px', height: '55px', marginTop: '3px', borderRadius: '50%' }}
                                        source={item.avt}
                                    />
                                    <View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ marginLeft: '5px', marginTop: '5px', fontWeight: '600' }}>
                                                {item.name}
                                            </Text>
                                            <Text style={{ marginLeft: '10px', marginTop: '5px', fontWeight: '400', color: 'gray' }}>
                                                @{item.name}
                                            </Text>
                                            <Text style={{ marginLeft: '10px', marginTop: '5px', fontWeight: '400', color: 'gray' }}>
                                                {item.time}
                                            </Text>
                                        </View>
                                        <View style={{ width: '250px' }}>
                                            <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px', marginTop: '5px', color: 'gray' }}>
                                                {item.text}
                                            </Text>
                                        </View>
                                        <View style={{ width: '250px', flexDirection: 'row' }}>
                                            <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px', marginTop: '5px', color: '#1D9BF0' }}>
                                                #minhchien
                                            </Text>
                                            <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px', marginTop: '5px', color: '#1D9BF0' }}>
                                                #trongtai
                                            </Text>
                                            <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px', marginTop: '5px', color: '#1D9BF0' }}>
                                                #react
                                            </Text>
                                        </View>
                                        <View>
                                        { 
                                            item.image &&
                                            <Image 
                                                style={{ width: '311px', height: '175px', marginTop: '3px', borderRadius: '10px' }}

                                                source={item.image}
                                            />}
                                        </View>
                                        <View>
                                            <Text style={{ color: 'gray', marginBottom: '5px', marginTop: '5px' }}>
                                                1M views
                                            </Text>
                                        </View>
                                        <View style={{ width: '311px', justifyContent: 'space-between', flexDirection: 'row', marginBottom: '10px' }}>
                                            <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between' }}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                    <Image
                                                        style={{ width: '15px', height: '15px', marginTop: '3px' }}

                                                        source={require('../assets/Comment Stroke Icon.svg')}
                                                    />
                                                    <Text style={{ marginLeft: '5px', color: 'gray' }}>
                                                        {item.comment}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Image
                                                        style={{ width: '18px', height: '12px', marginTop: '3px' }}

                                                        source={require('../assets/Retweet Stroke Icon.svg')}
                                                    />
                                                    <Text style={{ marginLeft: '5px', color: 'gray' }}>
                                                        {item.reply}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Image
                                                        style={{ width: '15px', height: '14px', marginTop: '3px' }}

                                                        source={require('../assets/Heart solid icon.svg')}
                                                    />
                                                    <Text style={{ marginLeft: '5px', color: 'gray', color: '#CE395F' }}>
                                                        {item.like}
                                                    </Text>
                                                </View>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Image
                                                        style={{ width: '15.25px', height: '14.8px', marginTop: '3px' }}

                                                        source={require('../assets/Share stroke icon.svg')}
                                                    />
                                                    <Text style={{ marginLeft: '5px', color: 'gray' }}>
                                                        {item.share}
                                                    </Text>
                                                </View>

                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Image
                                                    style={{ width: '8.25px', height: '13.25px', marginTop: '3px' }}

                                                    source={require('../assets/Activity Icon.svg')}
                                                />

                                            </View>


                                        </View>
                                    </View>


                                </View>
                            </View>
                            {/* <View style={{ width: '100%', borderBottomWidth: '1px', borderBottomColor: '#CED5DC' }}>

                        </View> */}
                        </Pressable>
                    )
                }}>
                </FlatList>
            </ScrollView>
            {/* </View> */}



        </View>
  )
}

export default Notification_Mentions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontFamily:'Inter'
  }
})
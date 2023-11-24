import { StyleSheet, Text, View, Image, Pressable, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const TweetDetail = ({ navigation, route }) => {

  const url = "https://6544af105a0b4b04436cbc5b.mockapi.io/Twitter_APP/";
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   fetch(url + route.params?.id)
  //     .then((response) => response.json())
  //     .then((json) => setUser(json));
  // }, [route])

  return (
    <View style={styles.container}>

      <View style={{ width: '100%', height: '50px', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Pressable onPress={() => {
          navigation.goBack();
        }}>
          <Image
            style={{ width: '9.5px', height: '17px', marginTop: '15px', marginLeft: '20px' }}

            source={require('../assets/Left Arrow Icon.svg')}
          />
        </Pressable>

        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontWeight: '800' }}>
            Bài đăng
          </Text>
        </View>
        <View>
        </View>
      </View>
      <View style={{ width: '100%', height: '429px', backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '10px' }}>
          <View style={{}}>
            <Image
              style={{ width: '66px', height: '66px', marginLeft: '20px', borderColor: 'white', borderRadius: '50%', borderWidth: '3px' }}
              source={route.params.item.avt}
            />
          </View>

          <View style={{ marginLeft: '5px', alignItems: 'center' }}>
            <Text style={{ fontWeight: '600' }}>
              {route.params.item.name}
            </Text>
            <Text style={{ color: 'gray', fontWeight: '400' }}>
              @{route.params.item.name}
            </Text>
          </View>

        </View>
        <View style={{ width: 347 }}>
          <Text style={{ color: 'gray', fontWeight: '400', marginLeft: '20px', marginTop: '20px', fontSize: '22px' }}>
            {route.params.item.text}
          </Text>
        </View>
        <View style={{ marginLeft: '20px', marginTop: '20px' }}>
        {
              route.params.item.image &&
              <Image
                style={{ width: '350px', height: '200px', borderRadius: '10px' }}
                source={route.params.item.image}
              />
            }
          {/* <Pressable
            style={{ width: '374px', height: '79px', borderColor: 'lightgray', borderWidth: '1px', borderRadius: '10px', flexDirection: 'row' }}

          >
            


            <br></br>
            <View style={{ width: '270px', height: '79px' }}>
              <Text style={{ fontWeight: '600', marginLeft: '10px', marginTop: '5px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </Text>

              <Text style={{ fontWeight: '400', marginLeft: '10px', marginTop: '5px', color: 'gray' }}>
                onlyfan@minhchien241.com
              </Text>

            </View>





          </Pressable> */}
          <View style={{ marginTop: '20px', flexDirection: 'row' }}>
            <Text style={{ color: 'gray' }}>
              18:20
            </Text>
            <Text style={{ color: 'gray', marginLeft: '15px' }}>
              {route.params.item.time}
            </Text>
            <Text style={{ color: '#1D9BF0', marginLeft: '15px' }}>
              Twitter Iphone
            </Text>

          </View>
          <View style={{ flexDirection: 'row', marginTop: '20px' }}>
            <Image
              style={{ width: '8.25px', height: '13.25px', marginTop: '3px' }}
              source={require('../assets/Activity Icon.svg')}
            />
            <Text style={{ marginLeft: '9px', color: 'gray' }}>
              Hoạt động của bài viết
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: '20px' }}>
            <Text style={{ fontWeight: '600' }}>
              {route.params.item.like}
            </Text>
            <Text style={{ fontWeight: '400', color: 'gray', marginLeft: '5px' }}>
              Thích
            </Text>
          </View>
          <View style={{ justifyContent: 'center', width: '374px', padding: '20px' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  style={{ width: '15px', height: '15px', marginTop: '3px' }}

                  source={require('../assets/Comment Stroke Icon.svg')}
                />

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: '18px', height: '12px', marginTop: '3px' }}

                  source={require('../assets/Retweet Stroke Icon.svg')}
                />

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: '15px', height: '14px', marginTop: '3px' }}

                  source={require('../assets/Heart solid icon.svg')}
                />

              </View>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{ width: '15.25px', height: '14.8px', marginTop: '3px' }}

                  source={require('../assets/Share stroke icon.svg')}
                />

              </View>

            </View>
          </View>
        </View>
      </View>

      <View>



      </View>
    </View>
  )
}

export default TweetDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter',
    backgroundColor: 'white',
  }
})
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './Screen/Home';
import Search from './Screen/Search';
import Message from './Screen/Message';
import NewMessage from './Screen/NewMessage';
import Notifications from './Screen/Notifications';
import Profile from './Screen/Profile';
import Hello from './Screen/Hello';
import Register from './Screen/Register';
import Sigin from './Screen/Sigin';
import Menu from './Screen/Menu';
import Twetting from './Screen/Twetting';
import TweetDetail from './Screen/TweetDetail';


export default function App() {

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  const TabScreens = ({route}) => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Home') {
              iconName = focused ? <Image style={styles.tabBar} source={require('./assets/home_focus.png')} /> : <Image style={styles.tabBar} source={require('./assets/home.png')} />;
            } else if (rn === 'Search') {
              iconName = focused ? <Image style={styles.tabBar} source={require('./assets/search_focus.png')} /> : <Image style={styles.tabBar} source={require('./assets/search.png')} />;
            } else if (rn === 'Notification') {
              iconName = focused ? <Image style={styles.tabBar} source={require('./assets/bell_focus.png')} /> : <Image style={styles.tabBar} source={require('./assets/bell.png')} />;
            } else if (rn === 'Message') {
              iconName = focused ? <Image style={styles.tabBar} source={require('./assets/mail_focus.png')} /> : <Image style={styles.tabBar} source={require('./assets/mail.png')} />;
            } else if (rn === 'Menu') {
              iconName = focused ? <Image style={styles.tabBar} source={require('./assets/menu_focus.svg')} /> : <Image style={styles.tabBar} source={require('./assets/menu.svg')} />;
            }
            return iconName;
          },
          tabBarLabel: '',
        })}
      >
        <Tab.Screen name='Home' initialParams={{id: route.params.id}} component={Home} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='Search' initialParams={{id: route.params.id}} component={Search} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='Notification' initialParams={{id: route.params.id}} component={Notifications} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='Message' initialParams={{id: route.params.id}} component={Message} options={{ headerShown: false }}></Tab.Screen>
        <Tab.Screen name='Menu' initialParams={{id: route.params.id}} component={Menu} options={{headerShown: false}}></Tab.Screen>
      </Tab.Navigator>)
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Hello' component={Hello}></Stack.Screen>
        <Stack.Screen name='Register' component={Register}></Stack.Screen>
        <Stack.Screen name='Sigin' component={Sigin}></Stack.Screen>
        <Stack.Screen name='TabScreen' component={TabScreens}></Stack.Screen>
        <Stack.Screen name='NewMessage' component={NewMessage}></Stack.Screen>
        <Stack.Screen name='Profile' component={Profile}></Stack.Screen>
        <Stack.Screen name='Twetting' component={Twetting}></Stack.Screen>
        <Stack.Screen name='TweetDetail' component={TweetDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBar: {
    width: 25,
    height: 25,
    resizeMode: 'contain'
  }
});


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Get from "./Get";
import Push from "./Push";
import Delete from "./Delete";
import Post from './Post';
import About from './About';

// const botTab=()=>{
//   return(
    
//   )
// }
const Drawer = createDrawerNavigator();
const Tab=createBottomTabNavigator();
const BotTab=()=>{
  return(
    <Tab.Navigator>
      <Tab.Screen name='Get' component={Get} options={{headerShown:false}}/>
      <Tab.Screen name='Push' component={Push} options={{headerShown:false}}/>
      <Tab.Screen name='Post' component={Post} options={{headerShown:false}}/>
      <Tab.Screen name='Delete' component={Delete} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}
function App(){
return (
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BotTab}  options={{headerShown:false}}/>
      <Drawer.Screen name="About" component={About}  options={{headerShown:false}}/>
    </Drawer.Navigator>
    </NavigationContainer>
);
}


export default App;

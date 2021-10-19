import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'

const Tab =createBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
   <Tab.Navigator
   screenOptions={({route})=>({
       tabBarIcon:({focused,color,size})=>{
           let iconName;
           if(route.name==='Feed'){
           iconName=focused?'book':'book-otline'
           }
           else if(route.name==='CreatePost'){
               iconName=focused? 'create':'create-outtline'
           }
           return <Ionicons name={iconName} size={size} color={color}/>
       }
   })}>
       tabBarOptions={{
       activeTintColor: 'tomato',
       inactiveTintColor: 'gray'

       }}
       <Tab.screens name='Feed' component={Feed}/>
       <Tab.screens name='CreatePost' component={CreatePost}/>
        </Tab.Navigator>

    )
}
export default BottomTabNavigator



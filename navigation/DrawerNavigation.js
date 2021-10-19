import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import  Profile from '../screens/Profile'

const Drawer=createDrawerNavigator();

const DrawerNavigator=()=>{
return(
    <Drawer.navigator>
        <Drawer.Screen name="Home" component={TabNavigator}/>
        <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.navigator>
)

}

export default DrawerNavigator

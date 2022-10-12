import {createNativeStackNavigator} from '@react-navigation/native-stack'

import { Home } from '../screens/Home'

import { Games } from '../screens/Game'
import React = require('react')

const {Navigator, Screen} = createNativeStackNavigator()


export function AppRoute () {
    return (
        <Navigator> 
            <Screen
            name = "home"
            component = {Home}
            />

            <Screen 
            name = "games"
            component = {Games}
            />
        </Navigator>
    )
}
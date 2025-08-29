import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../constants/Colors'
import { useColorScheme } from 'react-native'
import Iconicons from 'react-native-vector-icons/Ionicons'
import UserOnly from '../../components/auth/UserOnly'
export default function DashboardLayout() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <UserOnly>
    <Tabs
      screenOptions={{
        headerShown: false,
        tabbBarStyle: {
          backgroundColor: theme.background,
          paddingTop: 10,
          height: 90
        },
        tabBraActoveTintColor: theme.iconColorfocused,
        tabBraActoveTintColor: theme.iconColor,
  
      }}
      

    >
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile', tabBarIcon: ({ focused }) => (
            <Iconicons
              size={24}
              name={focused ? 'person' : 'person-outline'}
              color={focused ? theme.iconColorfocused : theme.
              iconColor}
            />
          )}}
      />
    <Tabs.Screen
        name="books"
        options={{
          title: 'Books',tabBarIcon: ({ focused }) => (
            <Iconicons
              size={24}
              name={focused ? 'book' : 'book-outline'}
              color={focused ? theme.iconColorfocused : theme.
              iconColor}
      
      />
          )
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',tabBarIcon: ({ focused }) => (
            <Iconicons
              size={24}
              name={focused ? 'create' : 'create-outline'}
              color={focused ? theme.iconColorfocused : theme.
                iconColor}
            />
              )
        }}
      />
      </Tabs>
      </UserOnly>
  )
}

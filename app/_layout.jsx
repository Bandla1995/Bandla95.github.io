import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
      <View styles={{ flex: 1 }}>
          <Stack />
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({})
import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedView = ({style,...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.dark
    

  return (
    <View
          style={[{ backgroundColor: ThemedView.backgroundColor }, style]}
          {...props}
    />
  )
}

export default ThemedView
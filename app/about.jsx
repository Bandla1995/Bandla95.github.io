import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {r
  return (
    <View style={styles.container}>
          <Text style={styles.title}>About Page</Text>
          <Link href="/" style={styles.link}>Go to Home Page</Link>
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    },
    link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})
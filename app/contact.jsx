import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Contact = () => {r
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Contact Page</Text>
          <Link href="/" style={styles.link}>Go to Home Page</Link>
    </View>
  )
}

export default Contact

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
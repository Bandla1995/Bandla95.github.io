import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import home from '../assets/img/home.png'

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={home} style={styles.img} />
      <Text style={styles.title}>The Number 1</Text>

      <Text style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </Text>

      <Link href="/about" style={styles.link}>About Page</Link>
    </View>
  )
}

export default Home

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
  img: {
    marginVertical: 20,
  },
   link: {
        marginVertical: 10,
        borderBottomWidth: 1,
  }
})
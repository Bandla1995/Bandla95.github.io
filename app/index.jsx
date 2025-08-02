import { StyleSheet, Text,  Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../componets/ThemedView'
import ThemedLogo from '../componets/ThemedLogo'
import Spacer from '../componets/Spacer'
import ThemedText from '../componets/ThemedText'

const Home = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedLogo />
      <Spacer />

      <ThemedText style={styles.title} title={true}>
        The Number 1</ThemedText>

      < ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
        Reading List App
      </ThemedText>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/registar" style={styles.link}>
        <ThemedText>Registar Page</ThemedText>
      </Link>
    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0dfe8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  img: {
    marginVertical: 18
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
   link: {
        marginVertical: 10,
        borderBottomWidth: 1
  }
})
import { StyleSheet } from 'react-native'
import React from 'react'
 import { Link } from "expo-router"
import ThemedView from "../components/ThemedView"
import ThemedLogo from "../components/ThemedLogo"
import Spacer from "../components/Spacer"
import ThemedText from "../components/ThemedText"

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
        <ThemedText>Login</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register</ThemedText>
      </Link> 
       <Link href="/profile" style={styles.link}>
        <ThemedText>Profile</ThemedText>
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
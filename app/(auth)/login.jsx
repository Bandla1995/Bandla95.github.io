import { StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../../componets/ThemedView'
import ThemedText from '../../componets/ThemedText'
import Spacer from '../../componets/Spacer'

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={StyleSheet.title}>
        Login to Your Account
          </ThemedText>
          
      <Spacer height={100} />
      <Link href='/register'>
        <ThemedText style={{ textAlign: 'center' }}>
          Register instead
        </ThemedText>
      </Link>
    </ThemedView>
  )
}
export default Login
const styles = StyleSheet.create({
 container: {
    flex: 1,
   alignItems: "center",
    justifyContent: "center",
  },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    }
})
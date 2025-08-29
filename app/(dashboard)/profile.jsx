import { StyleSheet, Text } from "react-native"
import { useUser } from '../../hooks/useUser'    
            
import ThemedButton from "../../components/ThemedButton"  
import Spacer from "../../components/Spacer"
import ThemedText from "../../components/ThemedText"
import ThemedView from "../../components/ThemedView"

const Profile = () => {
  const { logout, user } = useUser()


  return (
    <ThemedView style={styles.container}>
      
          
      <ThemedText title={true} style={styles.heading}>
       {user.email}
          </ThemedText>
          <Spacer />
          
        <ThemedText> Time to start reading some books ...</ThemedText>
      <Spacer />
      
      <ThemedButton onPress={logout} style={styles.button}>
        <Text style={{ color: '#f2f2f2' }}>Logout</Text>
      </ThemedButton> 
        
    </ThemedView>
  )
}
export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    heading: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
})
import { Colors } from "../constants/Colors";
import { ActivityIndicator, useColorScheme } from "react-native";
import ThemedView from "./ThemedView";


const ThemedLoader = () => { 
    const colorscheme = useColorScheme();
    const theme = Colors[colorscheme] || Colors.light;
    
    return (
        <ThemedView style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ActivityIndicator size="large" color={theme.text} />
            </ThemedView>
            )
            

}

export default ThemedLoader;
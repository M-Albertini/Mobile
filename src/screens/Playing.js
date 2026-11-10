import { Button, Text, View  } from "react-native";



export default function Playing(){
    return(
        <View>
            <Text>Tocando agora</Text>
            <Button
                title="Back Home"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    )
}
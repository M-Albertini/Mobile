import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


//importando as telas que serão abas
import HomeStack from "../navigation/HomeStack";
import Search from "../screens/Search";
import CreatePlaylist from "../screens/CreatePlaylist";
import Library from "../screens/Library";


//Instanciando o objeto de navegação do tipo bottonTab
const Tabs = createBottomTabNavigator();

export default function MainTabs(){
    return(
        <Tabs.Navigator screenOptions={{headerShown:false}}>

            <Tabs.Screen name="HomeStack" component={HomeStack}/>
            <Tabs.Screen name="Search" component= {Search}
                options={{title: "Search"}}
                 />
            <Tabs.Screen name="Library" component= {Library} 
                options={{title: "Library"}}
                />
            <Tabs.Screen name="CreatePlaylist" component= {CreatePlaylist} 
                options={{title: "Create"}}
                />
        </Tabs.Navigator>

    )
}
import react from 'react';
import { Easing, StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Login from "../pages/Login-Register/Login/index";
import Registrar from "../pages/Login-Register/Register/index";

export default function Router() {

    return(

        <NavigationContainer>

            <Stack.Navigator initialRouteName="Login" screenOptions={ { headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS } }>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Registrar" component={Registrar}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}
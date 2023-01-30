import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../pages/Home';
import CartScreen from '../pages/Cart';

const Stack = createNativeStackNavigator();

export default function Routes(){

    return(
        <Stack.Navigator>

        <Stack.Screen name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}/>

        <Stack.Screen name="Cart"
        component={CartScreen}
        options={{ headerShown: false }}/>

      </Stack.Navigator>
    )
}
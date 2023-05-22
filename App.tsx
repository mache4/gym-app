import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './pages/Home';
import WorkoutA from "./pages/WorkoutA";
import WorkoutB from "./pages/WorkoutB";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                navigationBarColor: "#238de9",
                statusBarColor: "#238de9",
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: "#373737"
                }
            }}>
                <Stack.Screen name="Home" component={Home} options={{
                    headerTitle: "Gym App"
                }} />
                <Stack.Screen name="WorkoutA" component={WorkoutA} options={{
                    headerTitle: "Workout A"
                }} />
                <Stack.Screen name="WorkoutB" component={WorkoutB} options={{
                    headerTitle: "Workout B"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './pages/Home';
import WorkoutA from "./pages/WorkoutA";
import WorkoutB from "./pages/WorkoutB";

import { Provider } from "react-redux";
import store from "./redux/store";
import ThemeContext from "./core/themeContext";
import { Appearance } from 'react-native';
import Records from "./pages/Records";
import { useState } from "react";

const Stack = createNativeStackNavigator();

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         background: "#000"
//     }
// }

export default function App() {
    const [theme, setTheme] = useState(Appearance.getColorScheme());

    Appearance.addChangeListener(({ colorScheme }) => {
        setTheme(colorScheme);
    });

    return (
        <Provider store={store}>
            <ThemeContext.Provider value={theme}>
                <Navigations />
            </ThemeContext.Provider>
        </Provider>
    );
}

const Navigations = () => {
    const [theme, setTheme] = useState(Appearance.getColorScheme());

    Appearance.addChangeListener(({ colorScheme }) => {
        setTheme(colorScheme);
    });

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                // navigationBarColor: "#238de9",
                // statusBarColor: "#238de9",
                headerTitleAlign: "center",
                headerTintColor: "#fff",
                headerStyle: {
                    backgroundColor: theme === "light" ? "#6200EE" : "#BB86FC",
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
                <Stack.Screen name="Records" component={Records} options={{
                    headerTitle: "Records"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { getDay, seePlan } from '../core/utils';
import ThemeProvider from '../core/themeContext';

type Props = {
    navigation: any
}

const Home = (props: Props) => {
    const date = new Date();
    const theme = useContext(ThemeProvider);
    const isLight = theme === "light";

    return (
        <SafeAreaView className={`h-screen ${isLight ? "bg-light-background" : "bg-dark-background"}`}>
            <ScrollView className="text-center p-5">
                <Text className="text-3xl uppercase mx-auto mb-5">{getDay(date.getDay())}</Text>

                {seePlan(getDay(date.getDay())) === "A" &&
                    <>
                        <Text className="mb-1">Pogledaj Workout Plan za {getDay(date.getDay())}:</Text>
                        <TouchableOpacity className={`mx-auto w-full py-5 rounded-md ${isLight ? "bg-light-primary" : "bg-dark-primary"}`} onPress={() => props.navigation.navigate("WorkoutA")}>
                            <Text className="mx-auto text-white">Workout A 🏋️</Text>
                        </TouchableOpacity>
                    </>
                }
                {seePlan(getDay(date.getDay())) === "B" &&
                    <>
                        <Text className="mb-1">Pogledaj Workout Plan za {getDay(date.getDay())}:</Text>
                        <TouchableOpacity className={`mx-auto w-full py-5 rounded-md ${isLight ? "bg-light-secondary" : "bg-dark-secondary"}`} onPress={() => props.navigation.navigate("WorkoutB")}>
                            <Text className="mx-auto text-white">Workout B 🏋️‍♀️</Text>
                        </TouchableOpacity>
                    </>
                }
                {seePlan(getDay(date.getDay())) === "none" &&
                    <View className={`mx-auto w-full py-5 rounded-md ${isLight ? "bg-light-error" : "bg-dark-error"}`}>
                        <Text className="mx-auto text-white">Slobodan si danas jeb'o te patak 😴💤</Text>
                    </View>
                }

                <Text className="mt-5 mb-1">Pogledaj sve Workout Planove:</Text>
                <View className="flex flex-row">
                    <TouchableOpacity className={`mx-auto w-1/2 py-5 rounded-l-md ${isLight ? "bg-light-primary" : "bg-dark-primary"}`} onPress={() => props.navigation.navigate("WorkoutA")}>
                        <Text className="mx-auto text-white">Workout A 🏋️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className={`mx-auto w-1/2 py-5 rounded-r-md ${isLight ? "bg-light-secondary" : "bg-dark-secondary"}`} onPress={() => props.navigation.navigate("WorkoutB")}>
                        <Text className="mx-auto text-white">Workout B 🏋️‍♀️</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text className="mt-5 mb-1">Pogledaj svoj Progress do sada:</Text>
                    <TouchableOpacity className={`mx-auto w-full py-5 rounded-md ${isLight ? "bg-light-error" : "bg-dark-error"}`} onPress={() => props.navigation.navigate("Records")}>
                        <Text className="mx-auto text-white">Records 📈</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
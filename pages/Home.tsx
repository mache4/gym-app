import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import { getDay, seePlan } from '../core/utils';

type Props = {
    navigation: any
}

const Home = (props: Props) => {
    const date = new Date();

    return (
        <SafeAreaView>
            <ScrollView className="text-center p-5">
                <Text className="text-3xl uppercase mx-auto mb-5">{getDay(date.getDay())}</Text>

                {seePlan(getDay(date.getDay())) === "A" &&
                    <>
                        <Text className="mb-1">Pogledaj Workout Plan za {getDay(date.getDay())}:</Text>
                        <TouchableOpacity className="mx-auto w-full py-5 bg-blue rounded-md" onPress={() => props.navigation.navigate("WorkoutA")}>
                            <Text className="mx-auto">Workout A 🏋️</Text>
                        </TouchableOpacity>
                    </>
                }
                {seePlan(getDay(date.getDay())) === "B" &&
                    <>
                        <Text className="mb-1">Pogledaj Workout Plan za {getDay(date.getDay())}:</Text>
                        <TouchableOpacity className="mx-auto w-full py-5 bg-purple rounded-md" onPress={() => props.navigation.navigate("WorkoutB")}>
                            <Text className="mx-auto">Workout B 🏋️‍♀️</Text>
                        </TouchableOpacity>
                    </>
                }
                {seePlan(getDay(date.getDay())) === "none" &&
                    <View className="mx-auto w-full py-5 bg-red rounded-md">
                        <Text className="mx-auto">Slobodan si danas jeb'o te patak 😴💤.</Text>
                    </View>
                }

                <Text className="mt-5 mb-1">Pogledaj sve Workout Planove:</Text>
                <View className="flex flex-row">
                    <TouchableOpacity className="mx-auto w-1/2 py-5 bg-blue rounded-l-md" onPress={() => props.navigation.navigate("WorkoutA")}>
                        <Text className="mx-auto">Workout A 🏋️</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="mx-auto w-1/2 py-5 bg-purple rounded-r-md" onPress={() => props.navigation.navigate("WorkoutB")}>
                        <Text className="mx-auto">Workout B 🏋️‍♀️</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
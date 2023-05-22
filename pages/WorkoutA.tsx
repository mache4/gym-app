import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { VezbaType } from "../core/types";
import Vezba from "../components/Vezba";

type Props = {};

const vezbe: VezbaType[] = [
    { id: 1, ime: "Flat Bench (Bar/Dumbbell)", brojSerija: 3, brojPonavljanja: "8-10", image: require('../assets/vezbe/flat-bench-press.jpg') },
    { id: 2, ime: "Chest Press", brojSerija: 3, brojPonavljanja: "8-10" },
    { id: 3, ime: "Squats", brojSerija: 3, brojPonavljanja: "8-10" },
    { id: 4, ime: "Leg Extensions", brojSerija: 3, brojPonavljanja: "6-8" },
    { id: 5, ime: "Abs Crunch", brojSerija: 3, brojPonavljanja: "Failure" },
    { id: 6, ime: "Tricep Extensions", brojSerija: 3, brojPonavljanja: "Failure" },
    { id: 7, ime: "Calves", brojSerija: 4, brojPonavljanja: "8-10" },
    { id: 8, ime: "CG Bench/Skull Crushers", brojSerija: 3, brojPonavljanja: "8-10" },
];

const WorkoutA = (props: Props) => {
    return (
        <View>
            <SafeAreaView>
                <ScrollView className="px-5">
                    <Image className="mx-auto my-5" source={require("../assets/workoutA.png")} />
                    {vezbe.map(i => <Vezba
                        id={i.id}
                        ime={i.ime}
                        brojSerija={i.brojSerija}
                        brojPonavljanja={i.brojPonavljanja}
                        image={i.image} />
                    )}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default WorkoutA;
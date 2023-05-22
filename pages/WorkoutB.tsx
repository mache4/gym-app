import { View, Text, Image, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { VezbaType } from "../core/types";
import Vezba from "../components/Vezba";

type Props = {};

const vezbe: VezbaType[] = [
    { id: 1, ime: "Lateral Pulldowns", brojSerija: 4, brojPonavljanja: "2x8-10mw/2x8-10hw" },
    { id: 2, ime: "Seated Row", brojSerija: 3, brojPonavljanja: "8-10" },
    { id: 3, ime: "Biceps Machine", brojSerija: 3, brojPonavljanja: "1x8-10hw/2x8-10mw" },
    { id: 4, ime: "Bent Over Barbell Row", brojSerija: 3, brojPonavljanja: "8-10" },
    { id: 5, ime: "Shoulder Press", brojSerija: 4, brojPonavljanja: "2x8-10hw/2x8-10hw" },
    { id: 6, ime: "Lateral Raise", brojSerija: 3, brojPonavljanja: "8-10" },
    { id: 7, ime: "Deadlifts", brojSerija: 3, brojPonavljanja: "8-10" },
    { id: 8, ime: "Biceps Bar/Dumbbell Curls", brojSerija: 3, brojPonavljanja: "1x8-10hw/2x8-10mw" }
];

const WorkoutB = (props: Props) => {
    return (
        <View>
            <SafeAreaView>
                <ScrollView className="px-5">
                    <Image className="mx-auto my-5" source={require("../assets/workoutB.png")} />
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

export default WorkoutB;
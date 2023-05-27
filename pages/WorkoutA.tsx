import { View, Image, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { ExerciseType } from "../core/types";
import Vezba from "../components/Exercise";
import { useTypedDispatch, useTypedSelector } from "../redux/store";
import { getExercises } from "../redux/actions/exercises";

const WorkoutA = () => {
    const exercises = useTypedSelector(state => state.exercises);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getExercises());
    }, [dispatch]);

    return (
        <View>
            <SafeAreaView>
                <ScrollView className="px-5">
                    <Image className="mx-auto my-5" source={require("../assets/workoutA.png")} />
                    {exercises && exercises.map((i: ExerciseType) => {
                        if (i.plan === "A")
                            return <Vezba
                                key={i._id}
                                _id={i._id}
                                name={i.name}
                                numOfSeries={i.numOfSeries}
                                numOfRepeats={i.numOfRepeats}
                                numOfKilos={i.numOfKilos}
                                plan={i.plan}
                                createdAt={i.createdAt} />;
                    })}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default WorkoutA;
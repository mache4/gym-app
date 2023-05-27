import { View, Text, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import type { ExerciseType } from "../core/types";
import { useTypedDispatch } from "../redux/store";
import { setNumOfKilos } from "../redux/actions/exercises";
import { createRecord } from "../redux/actions/records";

const Vezba = (props: ExerciseType) => {
    const { _id, name, numOfSeries, numOfRepeats, numOfKilos } = props;
    const [showButton, setShowButton] = useState(false);
    const brojKilogramaRef = useRef<any>();
    const dispatch = useTypedDispatch();

    const update = () => {
        dispatch(setNumOfKilos(_id, Number(brojKilogramaRef.current.value)));
        dispatch(createRecord(props, Number(brojKilogramaRef.current.value), new Date));
        setShowButton(false);
    };

    return (
        <View className="relative h-32 my-2 p-5 flex flex-col justify-between rounded-md opacity-100 bg-dark-grey">
            <View className="flex flex-row justify-between bg-blue p-2 rounded-md">
                <Text className="tracking-wider">{name}</Text>
                <Text className="tracking-wider">{`${numOfSeries}x[${numOfRepeats}]`}</Text>
            </View>
            <View className="flex flex-row items-center justify-center">
                <TextInput
                    className="w-10 text-center mr-1.5 border-b"
                    defaultValue={numOfKilos?.toString()}
                    onChange={() => setShowButton(true)}
                    ref={brojKilogramaRef}
                    onChangeText={(e) => brojKilogramaRef.current.value = e}
                    keyboardType="numeric" />
                <Text>kg</Text>
            </View>
            {showButton && <Text className="absolute border border-white rounded-md px-2 py-1 bottom-2 right-2" onPress={update}>Update</Text>}
        </View>
    );
}

export default Vezba;
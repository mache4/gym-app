import { View, Text } from "react-native";
import React from "react";
import type { RecordType } from "../core/types";

const Record = (props: RecordType) => {
    const { _id, exercise, newNumOfKilos, createdAt } = props;
    let date = new Date(createdAt);

    return (
        <View className="my-2 flex flex-col border p-5 rounded-md bg-dark-primary">
            <View className="flex flex-row justify-between mb-5">
                <Text className="tracking-wider">{exercise.name}</Text>
                <Text className="tracking-wider">{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</Text>
            </View>
            <View className="mx-auto">
                <Text className="tracking-wider">{exercise.numOfKilos}kg {`---->`} {newNumOfKilos}kg</Text>
            </View>
        </View>
    );
}

export default Record;
import { View, Text, Image } from "react-native";
import React from "react";
import type { VezbaType } from "../core/types";

const Vezba = (props: VezbaType) => {
    const { id, ime, brojSerija, brojPonavljanja, image } = props;

    return (
        <View className="h-60 flex flex-col justify-between border border-neutral-400" key={id}>
            <View className="flex flex-row justify-between p-5">
                <Text>{ime}</Text>
                <Text>{`${brojSerija}x[${brojPonavljanja}]`}</Text>
            </View>
            {image && <Image className="w-full h-2/3 mx-auto bg-cover" source={image} />}
        </View>
    );
}

export default Vezba;
import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useTypedDispatch, useTypedSelector } from "../redux/store";
import { getRecords } from "../redux/actions/records";
import { SafeAreaView } from "react-native-safe-area-context";
import { RecordType } from "../core/types";
import Record from "../components/Record";

const Records = () => {
    const records = useTypedSelector(state => state.records);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        dispatch(getRecords());
    }, [dispatch]);

    return (
        <View>
            <SafeAreaView>
                <ScrollView className="px-5">
                    {records && records.map((i: RecordType) =>
                        <Record
                            key={i._id}
                            _id={i._id}
                            exercise={i.exercise}
                            newNumOfKilos={i.newNumOfKilos}
                            createdAt={i.createdAt} />
                    )}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default Records;
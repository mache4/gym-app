import { ExerciseType } from "../../core/types";
import * as api from "../../core/api";
import { CREATE_RECORD, GET_RECORDS } from "../../core/actionTypes";

export const createRecord = (exercise: ExerciseType, newNumOfKilos: number, createdAt: Date) => async (dispatch: any) => {
    try {
        await api.createRecord(exercise, newNumOfKilos, createdAt);
        dispatch({ type: CREATE_RECORD });
    } catch (error) {
        dispatch({ type: CREATE_RECORD, error: error });
        return console.log(error);
    }
};

export const getRecords = () => async (dispatch: any) => {
    try {
        const { data } = await api.getRecords();
        dispatch({ type: GET_RECORDS, data });
    } catch (error) {
        dispatch({ type: GET_RECORDS, error: error });
        return console.log(error);
    }
};
import { SET_NUM_OF_KILOS, GET_EXERCISES } from "../../core/actionTypes";
import * as api from "../../core/api";

export const setNumOfKilos = (id: string, numOfKilos: number) => async (dispatch: any) => {
    try {
        await api.setNumOfKilos(id, numOfKilos);
        dispatch({ type: SET_NUM_OF_KILOS });
    } catch (error) {
        dispatch({ type: SET_NUM_OF_KILOS, error: error });
        return console.log(error);
    }
};

export const getExercises = () => async (dispatch: any) => {
    try {
        const { data } = await api.getExercises();
        dispatch({ type: GET_EXERCISES, data });
    } catch (error) {
        dispatch({ type: GET_EXERCISES, error: error });
        return console.log(error);
    }
};
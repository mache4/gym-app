import { GET_EXERCISES, SET_NUM_OF_KILOS } from "../../core/actionTypes";
import { ExerciseType } from "../../core/types";

const exercises = (state: ExerciseType[] = [], action: any) => {
    switch (action.type) {
        case GET_EXERCISES:
            state = action.data;
            return state;
        case SET_NUM_OF_KILOS:
            return state;
        default:
            return state;
    }
};

export default exercises;
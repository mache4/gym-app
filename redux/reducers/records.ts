import { CREATE_RECORD, GET_RECORDS } from "../../core/actionTypes";
import { RecordType } from "../../core/types";

const records = (state: RecordType[] = [], action: any) => {
    switch (action.type) {
        case CREATE_RECORD:
            return state;
        case GET_RECORDS:
            state = action.data;
            return state;
        default:
            return state;
    }
};

export default records;
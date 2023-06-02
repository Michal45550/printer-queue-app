import {
    SET_LOADING,
    GET_JOBS,
    CREATE_JOB,
    DELETE_JOB,
    REORDER_JOB,
    CANCEL_JOB
} from '../actions/printerQueueAction'

const initialState = {
    loading: false,
    queueJobs: [],
    printingJob: null
}

const PrinterQueueReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_JOBS:
            return {
                ...state,
                queueJobs: payload.filter(job => job.status === "queued"),
                printingJob: payload.find(job => job.status !== "queued"),
                loading: false
            }
        case CREATE_JOB:
            return {
                ...state,
                queueJobs: [...state.queueJobs, payload],
                loading: false
            }
        case REORDER_JOB:
            return {
                ...state,
                queueJobs: payload.filter(job => job.status === "queued"),
                loading: false
            }
        default:
            return state;
    }
}

export default PrinterQueueReducer;
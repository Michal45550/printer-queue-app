import { spawn } from 'redux-saga/effects'
import printerQueueSaga from './printerQueueSaga'

export default function* rootSaga() {
    yield spawn(printerQueueSaga);
}
import './PrinterQueue.css';
import PrintingJob from "../printingJob/PrintingJob";
import Queue from "../queue/Queue";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import * as actions from "../../redux/actions/printerQueueAction";


const PrinterQueue = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actions.GET_JOBS_REQUESTED });
    }, [dispatch]);

    return (
        <div className="printer-queue-app">

            <PrintingJob />

            <div className="divider"></div>

            <Queue />

        </div>
    );
};

export default PrinterQueue;
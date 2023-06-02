import './index.css';
import PrintingJob from "../../features/printerQueue/components/printingJob/PrintingJob";
import Queue from "../../features/printerQueue/components/queue/Queue";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import * as actions from "./actions";


const PrinterQueue = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: actions.GET_JOBS_REQUESTED});
    }, [dispatch]);

    const Divider = () => <div className="divider"></div>;

    return (
        <div className="printer-queue-app">
            <PrintingJob/>
            <Divider/>
            <Queue/>
        </div>
    );
};

export default PrinterQueue;

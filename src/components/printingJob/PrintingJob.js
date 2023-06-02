import './PrintingJob.css';
import Header from "../header/Header";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../redux/actions/printerQueueAction";

const PrintingJob = () => {

    const dispatch = useDispatch();

    const job = useSelector(({PrinterQueue}) => PrinterQueue.printingJob);

    const handleCancel = () => {
        dispatch({type: actions.CANCEL_JOB_REQUESTED, payload: job.name});
    }


    return (
        <div className="printing-job">
            <Header title={`CURRENT PRINTING JOB  ${job ? '|' : ''}  ${job?.duration || ''} ${job?.status === 'stopped' ? "SOPPED" : ''}`}
                    bottomLine={true}>
                {job && <button className="cancel-button" onClick={handleCancel} >
                    <div className="pause-icon"/>
                    <div className="pause-icon"/>
                </button>}

            </Header>
            {job ? job.name : 'No job is printing ...'}
        </div>
    );
};

export default PrintingJob;
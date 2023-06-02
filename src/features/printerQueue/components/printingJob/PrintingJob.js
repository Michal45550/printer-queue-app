import './PrintingJob.css';
import SubHeader from "../subHeader/SubHeader";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../actions";

const PrintingJob = () => {

    const dispatch = useDispatch();

    const job = useSelector(({PrinterQueue}) => PrinterQueue.printingJob);

    const handleCancel = () => {
        dispatch({type: actions.CANCEL_JOB_REQUESTED, payload: job.name});
    }


    return (
        <div className="printing-job">
            <SubHeader title={`CURRENT PRINTING JOB  ${job ? '|' : ''}  ${job?.duration || ''} ${job?.status === 'stopped' ? "SOPPED" : ''}`}
                       bottomLine={true}>
                {job && <button className="cancel-button" onClick={handleCancel} >
                    <div className="pause-icon"/>
                    <div className="pause-icon"/>
                </button>}

            </SubHeader>
            {job ? job.name : 'No job is printing ...'}
        </div>
    );
};

export default PrintingJob;
import './Job.css';
import img from '../../assets/3d-modeling (1).png';
import clockIcon from '../../assets/clock.png';
import authorIcon from '../../assets/user.png';
import deleteIcon from '../../assets/delete.png';
import {useDispatch} from "react-redux";
import * as actions from "../../redux/actions/printerQueueAction";

const Job = ({job}) => {

    const dispatch = useDispatch();

    const handleReorder = (up) => {
        if ((job.index === 0 && up) || (job.last && !up))
            return;
        dispatch({type: actions.REORDER_JOB_REQUESTED, payload: {name: job.name, up}});
    }

    const handleDelete = () => {
        dispatch({type: actions.DELETE_JOB_REQUESTED, payload: job.name});
    }

    function toHoursAndMinutes(totalSeconds) {
        const totalMinutes = Math.floor(totalSeconds / 60);

        const seconds = totalSeconds % 60;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        return {h: hours, m: minutes, s: seconds};
    }

    return (
        <div className="job">
            <div className="reorder">
                <div className={`reorder-button ${job.index === 0 ? 'disable-button' : ''}`}
                     onClick={() => handleReorder(true)}>
                    <div className="arrow-up"></div>
                    <div className="underline"></div>
                </div>
                <div className={`reorder-button ${job.last ? 'disable-button' : ''}`}
                     onClick={() => handleReorder(false)}>
                    <div className="underline"></div>
                    <div className="arrow-down"></div>
                </div>
            </div>

            <img className="job-image" src={img} alt="Job img" width="60px" height="60px"/>

            <div className="details">
                <h3>{job.index + 1}. &nbsp; {job.name}</h3>
                <img src={clockIcon} alt="Delete" width="15px" height="15px"/>
                <label>{job.duration} &nbsp; &nbsp; &nbsp;</label>
                <img src={authorIcon} alt="Delete" width="15px" height="15px"/>
                <label> Stanislav Polotolsky</label>
            </div>

            <div className="delete" onClick={handleDelete}>
                <img src={deleteIcon} alt="Delete" width="30px" height="30px"/>
            </div>
        </div>
    );
};

export default Job;
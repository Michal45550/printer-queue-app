import './Queue.css';
import Header from "../header/Header";
import Job from "../job/Job";
import NewJobModal from "../newJobModal/NewJobModal";
import {useSelector} from "react-redux";
import loadingIcon from '../../assets/Spinner-1s-200px.gif';

const Queue = () => {

    const queueJobs = useSelector(({PrinterQueue}) => PrinterQueue.queueJobs);
    const loading = useSelector(({PrinterQueue}) => PrinterQueue.loading);

    return (
        <div className="queue">

            <Header title="QUEUE" topLine={true}>
                {loading && <img src={loadingIcon} alt="Loading" width="50px" height="50px"/>}
                <NewJobModal/>
            </Header>

            {queueJobs.length ? queueJobs.map((job, index) =>
                <Job job={{...job, index, last: index === queueJobs.length - 1}}
                     key={index}/>
            ) : "-no jobs-"}

        </div>
    );
};

export default Queue;
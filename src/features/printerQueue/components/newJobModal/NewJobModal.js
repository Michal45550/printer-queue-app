import * as React from 'react';
import './NewJobModal.css';
import Modal from '@mui/material/Modal';
import * as actions from "../../actions";
import {useDispatch} from "react-redux";
import {useState} from "react";

const AddJobModal = () => {
    const dispatch = useDispatch();

    const JOB_DATA = {
        name: "",
        duration: ""
    }

    const [open, setOpen] = useState(false);
    const [jobData, setJobData] = useState(JOB_DATA);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setJobData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: actions.CREATE_JOB_REQUESTED, payload: jobData});
        handleClose();
        setJobData(JOB_DATA);
    }

    return (
        <div>
            <button className="add-button" onClick={handleOpen}>ADD A JOB</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className="modal">
                    <div className="modal-header">New job</div>
                    <div className="modal-content">
                        <form onSubmit={handleSubmit}>
                            <div className="modal-field">
                                <label htmlFor="jobName">Job Name </label>
                                <input type="text" name="name" value={jobData.name} onChange={handleInputChange} placeholder="Type a name for this job..."/>
                            </div>
                            <div className="modal-field">
                                <label htmlFor="jobDuration">Job Duration </label>
                                <input type="text" name="duration" value={jobData.duration} onChange={handleInputChange} placeholder="Type a duration for this job..."/>
                            </div>
                            <button type="submit" disabled={!(jobData.name && jobData.duration)}>Submit</button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AddJobModal;
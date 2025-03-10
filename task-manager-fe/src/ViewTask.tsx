import {I_Task} from "./interfaces/Interfaces";
import {useState} from "react";

const ViewTask = ({ passedTask, onClose} : {passedTask:I_Task, onClose: () => void}) => {
    const [task, setTask] = useState<I_Task>(passedTask);

    return(
        <dialog open>
            <p>{passedTask.name}</p>
            <form method="dialog">
                <button onClick = {onClose}>Edit Task</button>
                <button onClick = {onClose}>Delete Task</button>
                <button onClick = {onClose}>Done</button>
            </form>
        </dialog>
    )
}

export default ViewTask;
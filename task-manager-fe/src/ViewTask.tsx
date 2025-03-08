import {I_Task} from "./interfaces/Interfaces";
import {useState} from "react";

const ViewTask = (passedTask: I_Task) => {
    const [task, setTask] = useState<I_Task>(passedTask);

    //pop up box with headers and individual task
    //option to delete or update

}

export default ViewTask;
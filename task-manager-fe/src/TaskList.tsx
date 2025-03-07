import {useEffect, useState} from "react";
import {mockTaskListRequest} from "./mockServices/MockTaskListRequest";
import {I_Task} from "./interfaces/Interfaces";


const TaskList = () => {
    const [taskList, setTaskList] = useState<I_Task[]>([]);
    const [user, setUser] = useState("");

    useEffect(() => {
        // fetch all the lists according to user
        mockTaskListRequest(user).then((res) => {

        })

    }, [taskList]);

    const updateTable = () => {

    }
    return(
        <></>
    )
}

export default TaskList;
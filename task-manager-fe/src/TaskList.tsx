import {useEffect, useState} from "react";
import {mockTaskListRequest} from "./mockServices/MockTaskListRequest";
import {I_Task, I_UserAuth} from "./interfaces/Interfaces";
import {useAuth} from "./contextProvider/AuthContext";
import ViewTask from "./ViewTask";


const TaskList = () => {
    const authToken = sessionStorage.getItem("token");
    const [taskList, setTaskList] = useState<I_Task[]>([]);
    // @ts-ignore
    const [user, setUser] = useState<I_UserAuth>({userId: "abs@hotmail.com", token: authToken});
    const [selectedTask, setSelectedTask] = useState<I_Task | null>(null);

    useEffect(() => {
        // fetch all the lists according to user TODO fetch via token
        mockTaskListRequest(user).then((res) => {
            setTaskList(res);
            console.log(user);
        })

    }, []);

    const handleClose = () => {
        setSelectedTask(null); // Reset state when dialog is closed
    };

    const updateTable = () => {

    }

    return(
        <>
        <table>
            <thead>
                <tr>
                    {}
                </tr>
            </thead>
            <tbody>
            {taskList.length === 0 ? (
                <tr>
                    <td>No tasks available</td>
                </tr>
            ) : (
                taskList.map((task: I_Task) => (
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td>{task.tags}</td>
                        <td>
                            <button onClick={() => setSelectedTask(task)} type="button">View</button>
                        </td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
            {selectedTask && (<ViewTask passedTask={selectedTask} onClose={handleClose} />)}
        </>
    )
}

export default TaskList;
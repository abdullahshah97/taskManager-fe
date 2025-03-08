import {useEffect, useState} from "react";
import {mockTaskListRequest} from "./mockServices/MockTaskListRequest";
import {I_Task, I_UserAuth} from "./interfaces/Interfaces";
import {useAuth} from "./contextProvider/AuthContext";


const TaskList = () => {
    const authToken = sessionStorage.getItem("token");
    const [taskList, setTaskList] = useState<I_Task[]>([]);
    // @ts-ignore
    const [user, setUser] = useState<I_UserAuth>({userId: "abs@hotmail.com", token: authToken});

    useEffect(() => {
        // fetch all the lists according to user
        mockTaskListRequest(user).then((res) => {
            setTaskList(res);
            console.log(user);
        })

    }, []);

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
                taskList.map(task => (
                    <tr key={task.id}>
                        <td>{task.name}</td>
                        <td>{task.description}</td>
                        <td>{task.tags}</td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
        </>
    )
}

export default TaskList;
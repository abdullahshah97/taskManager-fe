import {I_UserAuth} from "../interfaces/Interfaces";
import {I_Task} from "../interfaces/Interfaces";

export const mockTaskListRequest = (requestDetails : I_UserAuth): Promise<I_Task[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (requestDetails.userId === "abs@hotmail.com" && requestDetails.token === "mock-token-123") {
                resolve([{
                    id: 111,
                    name: "Hang Clothes",
                    description: "Sun is out",
                    tags: ["Home", "Self-Care"]
                },{
                    id: 222,
                    name: "Eat Food",
                    description: "I'm Hungry",
                    tags: ["Food"]
                },{
                    id: 333,
                    name: "Code Task Manager",
                    description: "Get to Work",
                    tags: ["Work", "Career"]
                },{
                    id: 444,
                    name: "Go Sleep",
                    description: "Recommended 8 hours",
                    tags: ["Self-Care"]
                }]);
            } else {
                resolve([{
                    id: -1,
                    name: "",
                    description: "",
                    tags: []
                }]);
            }
        }, 1000);
    });
}

import {I_UserAuth} from "../interfaces/Interfaces";
import {I_Task} from "../interfaces/Interfaces";

export const mockTaskListRequest = (requestDetails : I_UserAuth): Promise<I_Task[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (requestDetails.userId === "abs@hotmail.com" && requestDetails.token === "mock-token-123") {
                resolve([{
                    id: 123,
                    name: "Hang Clothes",
                    description: "Sun is out",
                    tags: ["Home", "Self-Care"]
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

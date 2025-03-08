import {I_ResponseData} from "../interfaces/Interfaces";

export const mockSignupRequest = (email : string, password : string): Promise<I_ResponseData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email !== "abs@hotmail.com") {
                resolve({ success: true, token: "mock-token-123" });
            } else {
                resolve({ success: false, token: "" });
            }
        }, 1000);
    });
};
import {I_ResponseData} from "../interfaces/Interfaces";

export const mockLoginRequest = (email: string, password : string): Promise<I_ResponseData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === "abs@hotmail.com" && password === "password123") {
                resolve({ success: true, token: "mock-token-123" });
            } else {
                resolve({ success: false, token: "" });
            }
        }, 1000);
    });
};
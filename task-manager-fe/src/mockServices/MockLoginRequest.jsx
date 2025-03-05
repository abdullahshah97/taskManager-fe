export const mockLoginRequest = (email, password) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === "abs@hotmail.com" && password === "password123") {
                resolve({ success: true, token: "mock-token-123" });
            } else {
                resolve({ success: false, message: "Invalid credentials" });
            }
        }, 1000);
    });
};
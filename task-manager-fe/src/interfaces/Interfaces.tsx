export interface I_ResponseData {
    success: boolean;
    message?: string;
    token: string;
}

export interface I_Task {
    id: number,
    name: string,
    description: string,
    tags: string[],
}

export interface I_UserAuth {
    userId: string;
    token: string;
}

export interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
}

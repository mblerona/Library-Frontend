import axios from "../axios/axios";
import type { LoginUserRequest } from "../api/types/LoginUserRequest";
import type { LoginUserResponse } from "../api/types/LoginUserResponse";
import type { RegisterUserResponse } from "../api/types/RegisterUserResponse";
import type { RegisterUserRequest } from "../api/types/RegisterUserRequest";

const authRepository = {
    login: async (credentials: LoginUserRequest): Promise<LoginUserResponse> => {
        const response = await axios.post<LoginUserResponse>(
            "/user/login",
            credentials
        );

        return response.data;
    },

    register: async (
        user: RegisterUserRequest
    ): Promise<RegisterUserResponse> => {
        const response = await axios.post<RegisterUserResponse>(
            "/user/register",
            user
        );

        return response.data;
    },

    me: async (): Promise<RegisterUserResponse> => {
        const response = await axios.get<RegisterUserResponse>("/user/me");
        return response.data;
    },
};

export default authRepository;
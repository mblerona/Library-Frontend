import type { LoginRequest } from "../api/types/user";
import userApi from "../api/userApi";
import useAuth from "./useAuth";

const useLogin = () => {
    const { setToken } = useAuth();

    const login = async (data: LoginRequest) => {
        const response = await userApi.login(data);
        setToken(response.data.token);
    };

    return login;
};

export default useLogin;
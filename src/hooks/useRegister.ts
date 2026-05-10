import type { RegisterRequest } from "../api/types/user";
import userApi from "../api/userApi";

const useRegister = () => {
    const register = async (data: RegisterRequest) => {
        await userApi.register(data);
    };

    return register;
};

export default useRegister;
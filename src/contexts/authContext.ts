import { createContext } from "react";
import type { UserPayload } from "../api/types/user";

export interface AuthContextType {
    user: UserPayload | null;
    setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    setToken: () => {},
});

export default AuthContext;
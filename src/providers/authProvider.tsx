import { useMemo, useState } from "react";
import { jwtDecode } from "jwt-decode";

import AuthContext from "../contexts/authContext";
import type { UserPayload } from "../api/types/user";

interface Props {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: Props) => {
    const [token, setTokenState] = useState<string | null>(
        localStorage.getItem("token")
    );

    const setToken = (newToken: string | null) => {
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }

        setTokenState(newToken);
    };

    const user = useMemo<UserPayload | null>(() => {
        if (!token) {
            return null;
        }

        try {
            return jwtDecode<UserPayload>(token);
        } catch {
            return null;
        }
    }, [token]);

    const value = {
        user,
        setToken,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import axios from "axios";
import { loginFailure, loginStart, loginSucess } from "./AuthAction"

export const login = async (user, dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/auth/login", user);
        res.data.isAdmin && dispatch(loginSucess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}
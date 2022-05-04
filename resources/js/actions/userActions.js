import {
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
} from "../constant/userConstant";
import authApi from "../api/authApi";

export const signin = (email, password) => async (dispatch) => {
    console.log("load");
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });

    try {
        const { data } = await authApi.login(email, password);
        console.log(data);

        if (data.status_code != 200) {
            console.log(data);
            dispatch({
                type: USER_SIGNIN_FAIL,
                payload: data.message,
            });
        } else {
            dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
            localStorage.setItem("userInfo", JSON.stringify(data));
        }
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

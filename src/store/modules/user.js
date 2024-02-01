import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken as _setToken } from "@/utils";
const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    reducers: {
        setToken(state, action){
            state.token = action.payload;
            _setToken(action.payload);
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
        }
    }
});

const { setToken, setUserInfo } = userStore.actions;

const fetchToken = (params) => {
    return async(dispatch) => {
        const res = await request.post('/authorizations', params);
        dispatch(setToken(res.data.token));
    }
}

const getUserInfo = () => {
    return async(dispatch) => {
        const res = await request.get('/user/profile');
        dispatch(setUserInfo(res.data))
    }
}

const storeReducer = userStore.reducer;

export { fetchToken, getUserInfo, setToken, setUserInfo };

export default storeReducer;
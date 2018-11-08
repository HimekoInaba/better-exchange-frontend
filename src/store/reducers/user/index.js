import {SIGN_USER} from "../../actions/user";

export const initialState = {
    signed: false,
    email: '',
    nickname: ''
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGN_USER:
            state.signed = true;
            state.email = action.payload.email;
            state.nickname = action.payload.nickname;
            return state;
        default:
            return state;
    }
}

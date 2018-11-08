export const SIGN_USER = 'SIGN_USER';

export function signUserActionCreator(user) {
    return {
        type: SIGN_USER,
        payload: user,
    };
}

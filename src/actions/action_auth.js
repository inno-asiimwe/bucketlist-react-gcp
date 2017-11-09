export const REGISTER = 'register';

export function registerUser(values){
    console.log(values);
    return {
        type: REGISTER
    };
}
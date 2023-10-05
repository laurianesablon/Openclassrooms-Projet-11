import { clearMessage } from "../store/store";
export function clearErrorMessage(dispatch, message){
    if (message){
        dispatch(clearMessage())
    }
}
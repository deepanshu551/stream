import axios from "../api/axios"
import history from "../history";
import { SIGN_OUT, SIGN_IN, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "./type";

export const signIn = (id) => {

    return {
        type: SIGN_IN,
        payload: id
    }
}

export const signOut = () => {

    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async(dispatch,getState) => {
    const {userId}=getState().auth;
    console.log("in action ")
    const response = await axios.post("/streams", {...formValues,userId})

console.log(response)
    dispatch({ type: CREATE_STREAM, payload: response.data })

history.push("/")
}
export const fetchStreams = () => async(dispatch) => {

    const response = await axios.get("/streams");

    dispatch({ type: FETCH_STREAMS, payload: response.data })
}

export const fetchStream = (id) => async(dispatch) => {
console.log("yes",id)
    const response = await axios.get(`/streams/${id}`);

    dispatch({ type: FETCH_STREAM, payload: response.data })
}

export const editStream = (id, formValues) => async(dispatch) => {

    const response = await axios.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data })
    history.push("/")
}

export const deleteStream = (id) => async(dispatch) => {

    await axios.delete(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id })
    history.push("/")
}
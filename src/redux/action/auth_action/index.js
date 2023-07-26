import axios from "axios"


export const getLogin = ({ user, pass }) => {
    return (dispatch) => {
        axios.post(`https://reseller.regarsport.net/api/login`, {
            username: user,
            password: pass
        }
        ).then(result => {
            dispatch({ type: 'GET_LOGIN', payload: result.data })
            // console.log(result.data)
        }).catch(error => {
            console.log(error);
        })
    }
}
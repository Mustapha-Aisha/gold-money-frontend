import axios from 'axios'
import {constants} from './constants'
import { tokenHelper } from './tokenHelpers'

 const instance = axios.create({ // creates an instance of axios
    baseURL: constants.API_URL,
    headers:{
        common:{
            "Content-Type": 'application/json',
            "Accept": '*',
            "Access-Control-Allow-Origin": "*"

        }
    }
})

export const setTokenHeader = token => instance.defaults.headers.common['Authorization'] = token // sets token in header


instance.interceptors.response.use( // intereceptors watches requests and responses in this case it watches the response 
    response =>response, // if successful return reponse
    error =>{
        let token = tokenHelper.getToken(); //else get token 
        if(error.response.status === 401 && token){ // if status is unauthorized and token exist then user hasnt logged in  
            window.location.href = '/login';
        }
        else{
            return error.response;
        }

    }
)

export {instance}
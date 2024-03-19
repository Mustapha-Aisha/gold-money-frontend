import { instance as Axios } from "./axiosSetup";

// consume APIs
const AuthService = {
  login(data) {
    return Axios.post("/login", data);
  },

  register(data){
    return Axios.post("/register", data)
  },

  resetPassword(data) {
    return Axios.post("/resetPassword", data);
  }

};


export default AuthService
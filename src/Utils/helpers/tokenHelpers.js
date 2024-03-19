export const tokenHelper = {
    checkIfLoggedIn() {
        let token = localStorage.getItem('token');
       return  !!token;
    },

    setToken(token){
         localStorage.setItem('token',token);
    },

    getToken(){
        return localStorage.getItem('token');
        
    }

}

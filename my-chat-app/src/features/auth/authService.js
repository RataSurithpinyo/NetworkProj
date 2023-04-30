import axios from 'axios'
const API_URL='http://localhost:3000/api/v1/auth/' //http://localhost:3000
const register = async(userData)=>{
    try{
        const response = await axios.post(API_URL+'register/',userData)
        // console.log("after response")
        console.log(JSON.stringify(response.data))
        console.log(response.data.name)
        if(response.data){
            localStorage.setItem('user',response.data.name)
        }
        return response.data.name
    } catch(error){
        console.log('authService: register')
        console.log(error)
    }
}

const login = async(userData)=>{
    const response = await axios.post(API_URL+'login',userData)
    if(response.data){
        localStorage.setItem('user',response.data.name)
    }
    console.log(response.data)
    return response.data
}

const logout = () => {
    localStorage.setItem('user',null);
}

const authService = {
    register,
    logout,
    login,
}

export default authService;
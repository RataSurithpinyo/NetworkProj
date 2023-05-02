import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import { useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
const login_path = "http://localhost:4000/api/auth/login";

const Login = ({socket}) =>{
    //const [toServer,setToServer] = useState("")
    const [formData,setFormData]=useState({
        name: '',
        password: ''
    });
    const {name,password}=formData;
    // const dispatch = useDispatch()
    // const navigate = useNavigate()
    // const {user,isError,isSuccess,message} = useSelector((state)=>{
    //     return state.auth
    // })
    
    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    const onSubmit = async (e) => {
        e.preventDefault()
        //console.log('aftersubmit')
        const data = {
            name: formData.name,
            password: formData.password
        };
        
        const response = await fetch(login_path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        const result = await response.json()
        if(!response.ok){
            console.log(result.error);
            alert(result.error);
        }
        else{
            let toServer = formData.name
            console.log("toserver: "+ toServer)
            localStorage.setItem("name", toServer)
            socket.emit("newUser", {toServer, socketID: socket.id})
            //localStorage.setItem('user',JSON.stringify(result))
            //socket.emit("newUser", {email, socketID: socket.id})
            console.log("success emit after login")
            alert("Login completed");
            window.location.href="/";
        }
    }

    return(
    <>  
        <section className="heading">
            <h1><FaSignInAlt/> Login</h1>
            <p>Please login to start chatting</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control"
                    id="name" name="name" value={name} onChange={onChange}
                    placeholder="Enter Your Name" required/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control"
                    id="password" name="password" value={password} onChange={onChange}
                    placeholder="Enter Your password" required/>
                </div>
                <div className="form-group">
                    <button className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
    )
}

export default Login;
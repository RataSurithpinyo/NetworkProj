import {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
//import { useSelector, useDispatch } from 'react-redux'
//import { useNavigate } from 'react-router-dom'
const login_path = "http://localhost:4000/api/auth/login";

function Login(){
    const [formData,setFormData]=useState({
        email: '',
        password: ''
    });
    const {email,password}=formData;
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
            email: formData.email,
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
            localStorage.setItem('user',JSON.stringify(result))
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
                    <input type="email" className="form-control"
                    id="email" name="email" value={email} onChange={onChange}
                    placeholder="Enter Your email" required/>
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
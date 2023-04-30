import {useState} from 'react'
//import { useNavigate } from 'react-router-dom';
//import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
//import { useSelector,useDispatch } from 'react-redux';
//import { reset } from '../features/auth/authSlice'
const register_path = "http://localhost:5000/api/auth/register";

function Register(){
    const [formData,setFormData]=useState({
        name: '',
        nickname: '',
        email: '',
        password: ''
    });
    const {name,nickname,email,password}=formData;
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
            nickname: formData.nickname,
            email: formData.email,
            password: formData.password,
        };
        
        const response = await fetch(register_path, {
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
            alert("Register completed");
            window.location.href="/";
        }
    }
    

    return(
    <>  
        <section className="heading">
            <h1><FaUser/> Register</h1>
            <p>Please create an account</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control"
                    id="name" name="name" value={name} onChange={onChange}
                    placeholder="Enter Your Name" required/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                    id="nickname" name="nickname" value={nickname} onChange={onChange}
                    placeholder="Enter Your Nickname" required/>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control"
                    id="email" name="email" value={email} onChange={onChange}
                    placeholder="Enter Your Email" required/>
                </div>
                <div className="form-group">
                <input type="password" className="form-control"
                    id="password" name="password" value={password} onChange={onChange}
                    placeholder="Enter Your Password" required/>
                </div>

                <div className="form-group">
                    <button className='btn btn-block'>Submit</button>
                </div>
            </form>
        </section>
    </>
    )
}

export default Register;
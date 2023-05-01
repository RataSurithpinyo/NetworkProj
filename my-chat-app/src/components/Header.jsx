import {FaSignInAlt, FaSignOutAlt, FaUser, FaHome} from 'react-icons/fa'
import { Link } from 'react-router-dom'
//import { useDispatch } from 'react-redux'
import { useEffect, React, useState } from "react";

function Header(){
    //window.location.reload(true)
    //const navigate = useNavigate()
    const [user, setUser] = useState(null);
    useEffect(() => {
        setUser(localStorage.getItem("user"));
    }, []);

    const logOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        window.location.href="/";
    };

    console.log(user==null)

    return(
        <header className='header'>
            <ul>
            <li>
                <Link to='/'>
                    <FaHome/>Home
                </Link>
                </li>
            </ul>
            <ul>
                {user!=null?(
                    <li>
                        <button className='btn' onClick={logOut}><FaSignOutAlt/>Logout</button>
                    </li>
                ):(
                    <>
                    <li>
                    <Link to='/login'>
                        <FaSignInAlt/>Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUser/>Register
                    </Link>
                </li>
                </>
                )}   
            </ul>
        </header>
    )
}

export default Header;

import {Link} from 'react-router-dom'
import {FaRocketchat} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Home = ({socket}) => {
    const user = localStorage.getItem('name')
    console.log(user==null)
    //const {user} = useSelector((state)=>state.auth);
    //socket.emit("newUser", {userName, socketID: socket.id})
    return (
        <>
            <section className='heading'>
                <h1>Client-Server Chat System</h1>
                <p>An easy way to start chatting</p>
            </section>
            <div>
            {user!=null?(
                    <Link to='/chat' className='btn btn-reverse btn-block'>
                    <FaRocketchat/>Start Chatting
                    </Link>
                ):(
                    <>
                    </>
                )}
            </div>
            {/* <Link to='/new-ticket' className='btn btn-reverse btn-block'>
            <FaQuestionCircle/>Create New Appointment
            </Link>

            <Link to='/tickets' className='btn btn-block'>
            <FaTicketAlt/>View My Appointments
            </Link> */}
        </>
    )
}

export default Home;
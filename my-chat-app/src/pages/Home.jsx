import {Link} from 'react-router-dom'
import {FaRocketchat} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
socket.emit('join_room', {
    username: "prim",
    room: "123",
});

function Home(){
    const {user} = useSelector((state)=>state.auth);
    return (
        <>
            <section className='heading'>
                <h1>Client-Server Chat System</h1>
                <p>An easy way to start chatting</p>
            </section>
            <div>
            {user?(
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
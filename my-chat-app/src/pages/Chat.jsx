import {Link} from 'react-router-dom'
import {FaRocketchat} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { socket } from '../socket';

function Chat(){
    const {user} = useSelector((state)=>state.auth);
    return (
        <>
            <section className='heading'>
                <h1>Chat Page</h1>
            </section>
            {socket}
        </>
    )
}

export default Chat;
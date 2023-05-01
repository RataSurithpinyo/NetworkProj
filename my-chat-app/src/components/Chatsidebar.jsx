import React from 'react'
import {Link} from 'react-router-dom'

export default function Chatsidebar() {
  return (
    <nav
    style={{ backgroundColor: "#000000" }}
    id="sidebar"
    // className={isActive ? null : "active"}
  >
    <div className="pt-5" style={{paddingLeft:"15px",paddingRight:"15px"}}>
      <h3 style={{ color: "white" }} >
        <Link href={""}>Muse Connect</Link>
      </h3>
      <button className="btn btn-outline-dark" style={{ marginTop: "0em", marginBottom:"2em"}}>
        <a href="/" style={{textDecoration:"none",color:"white"}}>Back to home page</a>
      </button>
      {/* <p className={montserrat.className} style={{marginBottom:"0px"}}>{countchat()} available chat room(s)</p> */}
      <div className="list-unstyled components mb-5">
      {/* {chatRooms &&
          chatRooms.map((chatRoom, index) => (
            <>
            <Link href={`/Chat/${chatRoom.id}`}>
              <div className={montserrat.className} key={`chatroom_${index}`} id={index} style={{marginTop:"1em", marginLeft:"1em",fontSize:"1.2em"}}>
                <BsPersonLinesFill style={{marginRight:"1em"}}/>
                {chatRoom.name}
              </div>
            </Link>
            <hr />
            </>
          ))}
        {!chatRooms && <p className={montserrat.className}>No Chat Room</p>} */}
      </div>
    </div>
  </nav>
  )
}

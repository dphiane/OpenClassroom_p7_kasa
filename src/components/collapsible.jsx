import { useState } from "react";
import "../styles/collapsible.scss"

function Collapsible(props){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <div className="wrapper">
       <div className="collapsible">
        <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>
            {props.label}
        </button>
        {isOpen && <div className="content">{props.children}</div>}
       </div>
       </div>
    )
}
export default Collapsible
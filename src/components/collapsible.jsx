import { useState } from "react";
import "../styles/collapsible.scss"
import{ReactComponent as Up}from "../data/up.svg"
import{ReactComponent as Down} from "../data/down.svg"

function Collapsible(props){
    const [isOpen,setIsOpen]=useState(false)
    return(
        <div className="wrapper">
       <div className="collapsible">
        <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>
            {props.label}{(isOpen ? <Up className="arrow_up_down"/>: <Down className="arrow_up_down"/>)}
        </button>
        
        {isOpen && <div className="content">{props.children}</div>}
       </div>
       </div>
    )
}
export default Collapsible
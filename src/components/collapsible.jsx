import { useState } from "react";
import{ReactComponent as Up}from "../data/icon/up.svg"
import{ReactComponent as Down} from "../data/icon/down.svg"
import "../styles/components/collapsible.scss"

function Collapsible(props){
    const [isOpen,setIsOpen]=useState(false)
    return(
        
       <div className="collapsible">
        <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>
            {props.label}{(isOpen ? <Up className="arrow_up_down"/>: <Down className="arrow_up_down"/>)}
        </button>
        
        {isOpen && <div className="content">{props.children}</div>}
       </div>
    
    )
}
export default Collapsible
import "../styles/section.scss"
import data from '../data/logements.json'
import { Link } from "react-router-dom"

const Section=()=>{
return(

<section className="section">
    {data.map((d)=>(
    <Link to={d.id}><div className="card" key={d.id}>
        <img className="card_img" src={d.cover} alt="hébergement"></img>
        <p className="title">{d.title}</p>
    </div></Link>
    ))}
</section>

)
}
export default Section
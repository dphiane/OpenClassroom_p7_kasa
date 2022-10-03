import "../styles/section.scss"
import data from '../data/logements.json'

const Section=()=>{
return(
<section className="section">
    {data.map((d)=>(
    <div className="card" key={d.id}>
        <img className="card_img" src={d.cover} alt="hébergement"></img>
        <p className="title">{d.title}</p>
    </div>
    ))}
</section>
)
}
export default Section
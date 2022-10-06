import '../styles/NotFound.scss'
import { Link } from 'react-router-dom'
const NotFound=()=>{
    return(
        <div className="wrapper_not_found">
            <div className="not_found">
            <p className="not_found_text">404</p>
            <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <Link to='accueil'><p className="retour">Retourner sur la page d’accueil</p></Link>
        </div>
    )
}
export default NotFound
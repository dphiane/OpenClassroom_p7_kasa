import '../styles/footer.scss'
import footer from '../data/logo_footer.png'

const Footer=()=>{
    return(
        <footer>
<img className='footer_logo' src={footer} alt="logo kasa" />
<p className='footer_text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer;
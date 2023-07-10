
import './apmenu.css'
import { ImWhatsapp } from "react-icons/im";

const Apmenu = (props) => {

    const { sub1, sub2, sub3, sub4 , wasap } = props

    return (
        <div className='Apmenu'>
            <div className='ap-wasap' >
                <h3 >WhatsApp <ImWhatsapp style={{ color: '#55E511' }}/> {wasap}  </h3>
            </div>
            <div className='ap-lista'>
                <ul>
                    <li>{sub1}</li>
                    <li>{sub2}</li>
                    <li>{sub3}</li>
                    <li>{sub4}</li>
                </ul>
            </div>
        </div>
    );
}
export default Apmenu
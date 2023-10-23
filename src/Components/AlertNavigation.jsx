import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';


export default function AlertNavigation({variant, text, duration, link}){

    const navigate=useNavigate();
    if(duration!==0 && link){
        setTimeout(()=>{
            navigate(link)
        }, duration)
    }

    return(
        <Alert variant={variant}>
                    {text}
                </Alert> 
    )
}
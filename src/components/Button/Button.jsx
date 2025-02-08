import './button.css'
import { useNavigate } from 'react-router-dom';

export default function Button({btn_name, disabled, navigate}) {

    const navigates = useNavigate();

    const goToSecondPage = () => {
        navigates(`#${navigate}`);
        document.getElementById(navigate)?.scrollIntoView({ behavior: 'smooth' })
    };

    return(
        <button className="btn" type='submit' disabled={disabled} onClick={goToSecondPage}>
            <span className="btn_info">{btn_name}</span>
        </button>
    )
} 
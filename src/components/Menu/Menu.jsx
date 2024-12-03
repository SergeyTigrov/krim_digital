import { useState } from 'react';
import './menu.css'

export default function Menu() {

    const [count, setCount] = useState(true);

    function click(){
        setCount(!count);
    }

    return(
        <div className="menu">
            <div className="burger_menu" onClick={click}>
                <div className="burger_line1" style={{top: count ? '0px' : '8px', transform: count ? 'none' : 'rotate(45deg)'}}></div>
                <div className="burger_line2" style={{display: count ? 'block' : 'none'}}></div>
                <div className="burger_line3" style={{bottom: count ? '0px' : '8px', transform: count ? 'none' : 'rotate(-45deg)'}}></div>
            </div>
            <nav className="burger_nav" style={{top: count ? '-239px' : '0'}}>
                <ul>
                    <li><a href="#">Main</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Get in touch</a></li>
                </ul>
            </nav>
        </div>
    )
}
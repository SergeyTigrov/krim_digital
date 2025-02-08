import { useState } from 'react';
import './menu.css'
import { Burgermenu } from '../Burgermenu/Burgermenu.jsx';

export default function Menu() {

    const [count, setCount] = useState(true);

    function click(){
        setCount(!count);
    }
 
    return(
        <div className="menu">
            <Burgermenu count={count} click={click}/>
            <nav className="nav" style={{top: count ? '-239px' : '0'}}>
                <ul>
                    <li><a href="#firstpage">Main</a></li>
                    <li><a href="#aboutme">About</a></li>
                    <li><a href="#getintouch">Get in touch</a></li>
                </ul>
            </nav>
        </div>
    )
}
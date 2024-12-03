import logo from "../../images/Logo.svg"
import Menu from "../Menu/Menu"
import './header.css'

export default function Header() {
    return(
        <header>
            <div className="container">
                <div className="header_info">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <nav className="nav">
                        <ul>
                            <li><a href="#">Main</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Get in touch</a></li>
                        </ul>
                    </nav>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}
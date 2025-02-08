import logo from "../../images/Logo.svg"
import Menu from "../Menu/Menu"
import './header.css'

export default function Header() {
    return(
        <header>
            <div className="container">
                <div className="header_info">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <Menu/>
                </div>
            </div>
        </header>
    )
}
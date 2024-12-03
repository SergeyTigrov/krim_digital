import './button.css'

export default function Button({btn_name}) {
    return(
        <div className="button">
            <a className="btn" href="#!"><span className="btn_info">{btn_name}</span></a>
        </div>
    )
}
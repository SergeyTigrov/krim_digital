import './input.css'

export default function Input({type, label, placeholder, id, icon}) {
    return(
        <div className="block_input">
            <label htmlFor={id}>{label} <span>*</span></label>
            <div className='block_input_text'>
                <input type={type} className='input_text' id={id} placeholder={placeholder} required />
                {icon} 
            </div>
        </div>
    )
}
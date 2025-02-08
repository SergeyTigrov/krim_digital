import './input.css'

export default function Input({type, label, placeholder, id, icon, value, onchange, error}) {
    return(
        <div className="block_input">
            <label htmlFor={id}>{label} <span>*</span></label>
            <div className='block_input_text'>
                <input value={value} onChange={onchange} type={type} className={`input_text ${error ? 'error' : 'not_error'}`} id={id} placeholder={placeholder}/>
                {icon} 
                <div className='validation_error'>{error}</div>
            </div>
        </div>
    )
}
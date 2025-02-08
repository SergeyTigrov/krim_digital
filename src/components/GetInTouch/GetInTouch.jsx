import { useState } from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './getintouch.css'
import {ReactComponent as Person} from '../../images/Person.svg'
import {ReactComponent as Mail} from '../../images/mail.svg'
import {ReactComponent as Exclamation} from '../../images/Validation_error.svg'

export default function GetInTouch() {

    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');

    const [errorName, setErrorName] = useState('');
    const [errorMail, setErrorMail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        inputName ? setErrorName('') : setErrorName('Please fill this mandatory field');
        inputEmail ? setErrorMail('') : setErrorMail('Please fill this mandatory field');
        if (inputName && inputEmail) {
            alert('Форма успешно отправлена')
            setInputName('');
            setInputEmail('');
        }
    }

    return(
        <section className="get_in_touch" id='getintouch'>
            <div className="container">
                <div className="block_form">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <h2>Let’s discuss your project</h2>
                            <div className="inputs">
                                <Input 
                                    type={'text'} 
                                    label={'Your full name'} 
                                    placeholder={'Name Surname'} 
                                    id={'name'} 
                                    icon={errorName && !inputName ? <Exclamation className='input_icon'/> : <Person className='input_icon'/>}
                                    value={inputName}
                                    onchange={(e) => setInputName(e.target.value)}
                                    error={!inputName ? errorName : ''}
                                />
                                <Input 
                                    type={'text'} 
                                    label={'Your email'} 
                                    placeholder={'name@example.com'} 
                                    id={'email'} 
                                    icon={errorMail && !inputEmail ? <Exclamation className='input_icon'/> : <Mail className='input_icon'/>}
                                    value={inputEmail}
                                    onchange={(e) => setInputEmail(e.target.value)}
                                    error={!inputEmail ? errorMail : ''}
                                />
                            </div>  
                            <div className="text_about_project">
                                <label htmlFor="text">Tell me about your project</label>
                                <textarea id="text" placeholder='Add here a general description of your idea and target aim' disabled></textarea>
                            </div>
                            <Button btn_name={'Submit'}/>
                        </form>
                    </div> 
                </div>
            </div>
        </section>
    )
}
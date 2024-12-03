import Button from '../Button/Button'
import Input from '../Input/Input'
import './getintouch.css'
import {ReactComponent as Person} from '../../images/Person.svg'
import {ReactComponent as Mail} from '../../images/mail.svg'

export default function GetInTouch() {
    return(
        <section className="get_in_touch">
            <div className="container">
                <div className="block_form">
                    <div className="form">
                        <form>
                            <h2>Let’s discuss your project</h2>
                            <div className="inputs">
                                <Input type={'text'} label={'Your full name'} placeholder={'Name Surname'} id={'name'} icon={<Person className='input_icon'/>}/>
                                <Input type={'text'} label={'Your email'} placeholder={'name@example.com'} id={'email'} icon={<Mail className='input_icon'/>}/>
                            </div>  
                            <div className="text_about_project">
                                <label htmlFor="text">Tell me about your project</label>
                                <textarea id="text" placeholder='Add here a general description of your idea and target aim'></textarea>
                            </div>
                            <Button btn_name={'Submit'}/>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
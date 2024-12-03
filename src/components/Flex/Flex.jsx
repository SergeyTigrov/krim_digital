import './flex.css'
import Input from '../Input/Input'
import {ReactComponent as Person} from '../../images/Person.svg'
import {ReactComponent as Mail} from '../../images/mail.svg'

export default function Flex() {
    return(
        <div className="container">
        <div className="flex_block_form">
            <div className="flex_form">
                <form>
                    <div className='flex_inputs'>
                        <Input type={'text'} label={'Your full name'} placeholder={'Name Surname'} id={'name'} icon={<Person className='input_icon'/>}/>
                        <Input type={'text'} label={'Your email'} placeholder={'name@example.com'} id={'email'} icon={<Mail className='input_icon'/>}/>
                    </div>
                </form> 
            </div>
        </div>
        </div>
    )
}
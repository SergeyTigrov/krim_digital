import './aboutme.css'
import photo from '../../images/photo 2.jpg'
import Button from '../Button/Button'
import music from '../../images/Music.svg'
import drawing from '../../images/Drawing.svg'
import picture from '../../images/Picture.svg'
import InterestsItem from '../InterestsItem/InterestsItem'
import EducationItem from '../EducationItem/EducationItem'

export default function AboutMe() {
    return(
        <section id='aboutme'>
            <div className="container">
                <div className="aboout_me">
                    <h2>About me</h2>
                    <div className="about_nick">
                        <div className="photo_nick">
                            <div className="photo_nick_img">
                                <img src={photo} alt="Nick" />
                            </div>
                        </div>
                        <div className="about_nick_info">
                            <div className="line2"></div>
                            <p><span>Nick Richardson</span> - specialist in Frontend development. Clear code is my passion. Solving issues through negotiations</p>
                            <div className='btn1'><Button btn_name={'Get in touch'} disabled={true} navigate={'getintouch'}/></div>
                        </div>
                    </div>
                    <div className="about_me_info">
                        <div className="interests">
                            <h3>Interests</h3>
                            <div className="interests_items">
                                <InterestsItem icon={music} text1={'Music'} text2={'Indie rock | Reggae'}/>
                                <InterestsItem icon={drawing} text1={'Art'} text2={'Edvard Munch | Frida Kahlo'}/>
                                <InterestsItem icon={picture} text1={'Photography'} text2={'Portraits'}/>
                            </div>
                        </div>
                        <div className="education">
                            <h3>Education & Experience</h3>
                            <div className="education_items">
                                <EducationItem years={'2008 - Present'} text1={'Middle Frontend developer'} text2={'Ozon'}/>
                                <EducationItem years={'2006 - 2007'} text1={'Frontend development courses'} text2={'Stepik'}/>
                                <EducationItem years={'2000 - 2005'} text1={'Frontend developer'} text2={'Saint Petersburg State University'}/>
                            </div>
                        </div>
                        <div className='btn2'><Button btn_name={'Get in touch'}/></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
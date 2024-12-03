import Button from '../Button/Button'
import './firstpage.css'

export default function FirstPage() {
    return(
        <section className='section1'>
            <div className="container">
                <div className="main_page">
                    <div className="main_page_info">
                        <div className="text">
                            <h1>Hey, I’m Nick</h1>
                            <span>Frontend developer</span>
                            <div className="line"></div>
                            <p>Help you to create high-quality digital products that your clients will love and let your business thrive</p>
                        </div>
                        <Button btn_name={'Get in touch'}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
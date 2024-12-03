import './interestsitem.css'

export default function InterestsItem({icon, text1, text2}) {
    return(
        <div className="interests_item">
            <div className="interests_item_img">
                <img src={icon} alt="music" />
            </div>
            <div className="interests_item_text">
                <div className='interests_item_text_bold'>{text1}</div>
                <div>{text2}</div>
            </div>
        </div>
    )
}
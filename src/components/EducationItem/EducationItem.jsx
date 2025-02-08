import './educationitem.css'

export default function EducationItem({years, text1, text2}) {
    return(
        <div className="education_item">
            <div className="years">{years}</div>
            <div className="education_item_text">
                <div className='education_item_text_bold'>{text1}</div>
                <div>{text2}</div>
            </div>
        </div>
    )
}
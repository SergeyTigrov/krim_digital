import React from 'react'
import './burgermenu.css'

export const Burgermenu = ({count, click}) => {
  return (
    <div className="burger_menu" onClick={click}>
        <div className="burger_line1" style={{top: count ? '0px' : '8px', transform: count ? 'none' : 'rotate(45deg)'}}></div>
        <div className="burger_line2" style={{display: count ? 'block' : 'none'}}></div>
        <div className="burger_line3" style={{bottom: count ? '0px' : '8px', transform: count ? 'none' : 'rotate(-45deg)'}}></div>
    </div> 
  )
}

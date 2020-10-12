import React,{Component} from 'react'
import '../../../../assets/css/ygh/common.css'

const Header=()=>{
    return(    
        <header className="header">
            <nav className="menu">
                <ul className="menu_list">
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PORTFOLIO</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
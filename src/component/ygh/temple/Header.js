import React,{Component} from 'react'


const Header=()=>{
    return(    
        <header className="header">
            <nav className="menu">
                <ul className="menu_list">
                    <li><a href="/ygh/about">ABOUT</a></li>
                    <li><a href="/ygh/about">PORTFOLIO</a></li>
                    <li><a href="/ygh/contact">CONTACT US</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
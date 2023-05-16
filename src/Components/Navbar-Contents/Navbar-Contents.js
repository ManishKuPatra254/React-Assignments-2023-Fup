import { useState } from 'react';
import NavbarContents from './Navbar-Contents.module.css';
import { useNavigate } from 'react-router-dom';

import { CgMenuGridR } from 'react-icons/cg'

export function NavabarContents() {

    const [displayMenu, setDisplayMenu] = useState(false);

    const navigation = useNavigate()

    // to display the navbar while on click of the hamburger

    function handleClickDisplay() {
        setDisplayMenu(!displayMenu)
    }


    // to display the login page (function)

    function handleClickLogin() {
        navigation('/login')
    }

    // to display the register page (function)

    function handleClickRegister() {
        navigation('/register')
    }


    // to display the about us page (function)

    function handleClickAboutUs() {
        navigation('/aboutus')
    }




    return (
        <>

            <header>
                <div>
                    <img src="https://o.remove.bg/downloads/55a2a9b7-4182-4d24-bdb8-e649b167f327/Google-logo-removebg-preview.png"
                        className={NavbarContents.img1}
                        alt="" />
                </div>
                <div className={NavbarContents.lists}>
                    <ul>
                        <li>Home</li>
                        <li onClick={handleClickLogin}>Log in </li>
                        <li onClick={handleClickRegister}>Register</li>
                        <li onClick={handleClickAboutUs}>About Us</li>
                        <button className={NavbarContents.btn1}>Sign Up</button>
                    </ul>
                </div>
                <CgMenuGridR onClick={handleClickDisplay}
                    className={NavbarContents.icons}
                />
                {displayMenu && (
                    <div className={NavbarContents.inside_icons}>
                        <ul>
                            <li>Home</li>
                            <li>Log in </li>
                            <li>Register</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                )}
            </header>
        </>
    )
}
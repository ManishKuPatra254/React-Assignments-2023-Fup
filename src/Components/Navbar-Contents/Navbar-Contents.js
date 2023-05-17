import { useState } from 'react';
import NavbarContents from './Navbar-Contents.module.css';
import { useNavigate } from 'react-router-dom';
import { CgMenuGridR } from 'react-icons/cg'
import logo1 from './Google-logo-removebg-preview.png'

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
                    <img src={logo1}
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

            {/* hero section jsx start here  */}

            <div className={NavbarContents.hero_section}>

                <div className={NavbarContents.attributes}>

                    <h1>Be There</h1>
                    <p>Deliver brilliant messages in the moments that truely define your brand</p>
                    <button id={NavbarContents.btn2}>See How</button>
                </div>

                <div className={NavbarContents.image}>
                    <img src="https://static.vecteezy.com/system/resources/previews/008/552/477/original/abstract-banner-background-with-lines-pattern-illustration-free-vector.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
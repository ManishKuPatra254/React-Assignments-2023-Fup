import styles from './ResponsiveHeader.module.css'
import { RiMenu3Fill } from 'react-icons/ri';
// import { useRef } from 'react';
import { useState } from 'react';



export function HeaderResponsive() {

    const [display, setDisplay] = useState(false)

    function handleClick() {
        setDisplay(!display);
    }

    return (
        <>
            <header>

                <div className={styles.logo}>
                    Urban Solly
                </div>

                <nav className={styles.main_content}
                    id={display ? 'hidden' : ""}>


                    <ul type='none'>

                        <li>Home</li>
                        <li>About </li>
                        <li>Projects</li>
                        <li>Videos</li>
                        <li>Contact</li>
                        <button id={styles.btn1}>Login</button>
                    </ul>

                    <RiMenu3Fill
                        className={styles.icons}
                        onClick={handleClick}
                    />
                </nav>
            </header>

            <div className={styles.hero_section}>

                <div className={styles.attributes}>

                    <h1>Be There</h1>
                    <p>Deliver brilliant messages in the moments that truely define your brand</p>
                    <button id={styles.btn2}>See How</button>
                </div>

                <div className={styles.image}>
                    <img src="https://static.vecteezy.com/system/resources/previews/008/552/477/original/abstract-banner-background-with-lines-pattern-illustration-free-vector.jpg" alt="" />
                </div>
            </div>
        </>
    )
}


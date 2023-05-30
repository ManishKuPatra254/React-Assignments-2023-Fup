import './NavBar.css'
import { Link } from 'react-router-dom'

import { BsFillCalendarHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

export function Navbar() {
    return (
        <>
            <div className="main_navbar">
                <h1>NetFlixa</h1>

                <div className="sub_lists_nav">
                    <Link to={'/'} className='link'><AiFillHome values='Home' className='imported_iconss' /></Link>
                    <Link to={'/myfavourites'} className='link'><BsFillCalendarHeartFill className='imported_iconss' /></Link>
                </div>
            </div>
        </>
    )
}


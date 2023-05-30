import { Link } from 'react-router-dom';
import './Home.css';

export function HomePage() {
    return (
        <>
            <div className="main_container">
                <Link to={'/adminlogin'} className='btn_s_home'>Admin Log In</Link>
                <Link to={'/studentlogin'} className='btn_s_home' >Student Log In</Link>
            </div>
        </>
    )
}
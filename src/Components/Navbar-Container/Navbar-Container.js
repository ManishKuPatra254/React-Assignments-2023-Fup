import NavbarStyleBackground from './Navbar-Container.module.css';
import { NavabarContents } from '../Navbar-Contents/Navbar-Contents';

export function NavbarContainer() {
    return (
        <>
            <div className={NavbarStyleBackground.main_container}>
                <NavabarContents />
            </div>
        </>
    )
}
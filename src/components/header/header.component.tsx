import React from 'react';
import useToggle from '../../hooks/useToggle';
import resume from '../../assets/Samuel_Resume.docx.pdf';

interface INavLink {
    href: string
}

const navLinks: INavLink[] = [
    {
        href: "about",
    },
    {
        href: "projects",
    },
    {
        href: "contact",
    }
]

export default function Header()  {
    const [menuToggle, handleMenuToggle] = useToggle();

    const menuClick = (e: React.MouseEvent) => {
        e.preventDefault();
        handleMenuToggle();
    }

    return (<header>
        <nav className='header'>
            <div className='header__logo'>
                <i className='bx bx-lemon bx-lg'></i>
            </div>
            <div className={menuToggle ? 'header__links open' : 'header__links'}>
                <ul onClick={() => { handleMenuToggle() }}>
                    {navLinks.map((link, index) => 
                        <li key={index}><a href={`#${link.href}`}>{link.href}</a></li>
                    )}
                    <li><a href="https://medium.com/@samkofi.appiahkubi" target="_blank" className="cta">Blog</a></li>
                    <li><a href={resume} target="_blank" className="cta">Resume</a></li>
                </ul>
            </div>
            <div className='header__hamburger'>
                <button 
                    className={menuToggle ? 'menu__toggle x' : 'menu__toggle'} 
                    onClick={menuClick}>
                </button>
            </div>
        </nav>
    </header>);
}
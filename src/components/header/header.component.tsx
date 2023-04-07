import React from 'react';
import useToggle from '../../hooks/useToggle';

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
            <div className='header__links'>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experince">Experince</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className='resume__cta'>
                    <a href="">Resume</a>
                </div>
            </div>
            
            <div className='header__hamburger'>
                <button 
                    className={menuToggle ? 'menu__toggle x' : 'menu__toggle'} 
                    onClick={menuClick}>
                </button>
                <aside className="">

                </aside>
            </div>
        </nav>
    </header>);
}
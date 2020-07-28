import * as React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.SFC<INavProps> = (props) => {

    return (
        <>
            <nav className='navbar navbar-expand-md m-auto'>
                <div className="nav-container">
                    <ul className='nav'>
                    <li className="nav-link">
                            <Link to='/' className='text-dark'>Home</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='about' className='text-dark'>About</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='projects' className='text-dark'>Projects</Link>
                        </li>
                        <li className="nav-link">
                            <Link to='contact' className='text-dark'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}


export interface INavProps { }

export interface INavState {
}

export default Nav;
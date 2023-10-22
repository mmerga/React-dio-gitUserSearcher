import React from 'react';
import logo from '../../assets/images/github.png'
import './header.css'


export function Header(){
    return (
        <>
            <header>
                <div className="logo-container">
                    <img 
                        src={logo} 
                        alt="" 
                        srcSet="" 
                        width="100px"
                    />
                </div>
                <div className="link-container">
                    <ul>
                    <li><a 
                            href="https://www.linkedin.com/in/júlio-hebert-2a440b140" 
                            title="LinkedIn"
                            target="_blank" rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li><a 
                            href="https://github.com/mmerga/Angular-dio-quizBuzzfeed" 
                            target="_blank" 
                            title="GitHub" rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li><a 
                            href="https://www.dio.me/users/julioheer" 
                            title="DIO"
                            target="_blank" rel="noreferrer"
                        >
                            DIO
                        </a>
                    </li>
                    </ul>
                </div>
            </header>
        </>
    )
}
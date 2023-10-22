import React from 'react'
import './userInfo.css'

export function UserInfo({currentUser}){

    const {avatar_url, login, bio, html_url} = currentUser;

    return(
        <>
            <div className="userinfo-container">
                <div className="userinfo-img">
                    <img 
                        src={avatar_url} 
                        alt="Profile" 
                        srcSet="" 
                    />
                </div>
                <div className="userinfo-info">
                    <a 
                        href={html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        title="html_url"
                        >
                        {login}   
                    </a>
                    <p>{bio}</p>
                </div>
            </div>
        </>
    )

}
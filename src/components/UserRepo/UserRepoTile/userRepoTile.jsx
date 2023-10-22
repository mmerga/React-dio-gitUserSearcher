import React from 'react'
import './userRepoTile.css'

export function UserRepoTile({repo}){
    let {name, description, html_url, language, created_at} = repo;
    created_at = new Date(created_at)
    return (
        <>
            <div className="userRepoTile-container">
                <a 
                    href={html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='userRepoTile-name'
                    >
                    {name}
                </a>
                <p className="userRepoTile-description">{description}</p>
                <p className="userRepoTile-language">
                    {language}
                    <span className='userRepoTile-date'>{created_at.toDateString()}</span>
                </p>
            </div>
        </>
    );
}
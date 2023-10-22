import React from 'react'
import './userRepo.css'
import {UserRepoTile} from './UserRepoTile/userRepoTile'

export function UserRepo({currentUserRepo}){
    return(
        <>
        <div className="userRepo-container">
            {
                currentUserRepo[0]?.id  ? currentUserRepo?.map( repo => <UserRepoTile repo={repo}/>) : null
            }
        </div>
        </>
    );
}
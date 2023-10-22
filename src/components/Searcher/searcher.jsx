import React from 'react'
import './searcher.css'
export function Searcher(props){
    const {inputSeacher , handleInputSearcher, handleSearcher} = props
    return (
        <>
        <form >
            <div className="searcher-container">
                    <input 
                        type="text" 
                        onChange={handleInputSearcher} 
                        value={inputSeacher} 
                        placeholder='Username'
                        />
                    <button  onClick={handleSearcher}>Buscar</button>
            </div>
        </form>
        </>
    );
}
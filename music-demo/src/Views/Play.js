import React, { useContext } from 'react'
import '../App.css';
import Context from '../context'

const Play = () => {
    const { context, setContext } = useContext(Context)
    
    return (
        <>
            <div className="Play">
            <header className="Play-header">
                TEST
            </header>
            </div>
        </>
    );
}

export default Play;
import React, { useState, useEffect } from 'react';
import App from './App'
import '../css/App.css';
import Container from './Container'

const Button = () => {

    const [stateFrase, changeFrase] = useState({});

    const onBreakingBad = async () => {

        const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
        const frase = await api.json();
        changeFrase(frase[0])

    }

    useEffect( () => {
        onBreakingBad()
    }, [])

    return (
        <div>
            <div>
                <Container stateFrase={stateFrase} />
            </div>
            <div>
                <button className="button" onClick={onBreakingBad}> Obtener Frase </button>
            </div>
        </div>
    )
}

export default Button;
import React from 'react';
import '../css/App.css'

const Container = ({stateFrase}) => {
    console.log()


    return(
        <div className="container">
            <h2 className="subtitulo"> Breaking Bad </h2>
            <p className="parrafo"> {stateFrase.quote} </p>
            <cite> {stateFrase.author} </cite>
        </div>
    )
}

export default Container;
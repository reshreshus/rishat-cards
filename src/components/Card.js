import React from 'react'

export default function Card(props) {
    const {id, img, title, description} = props.card;
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="card-front-image" src="card_back.jpg" alt="Card Back"/>
                </div>
                <div className="flip-card-back">
                    <img src={img} alt="card image"/>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        
    )
}

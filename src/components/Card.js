import React from 'react'

export default function Card(props) {
    const {id, img, title, info} = props.card;

    return (
        <div className="col-9 mx-auto col-md-6 col-lg-3 my-3 mx-1 w-50">
            <div className="flip-card card-size-secondary">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img className="card-front-image card-size-secondary " src="card_back.jpg" alt="Card Back"/>
                    </div>
                    <div className="flip-card-back">
                        <img src={img} className="flip-card-back__image" alt="card image"/>
                        <h2 className="m-1 card-title-font-size-secondary">{title}</h2>
                        <p className="m-1 card-font-size-secondary">{info}</p>
                    </div>
                </div>
            </div>
            {/* <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src="img_avatar.png" alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div> */}
        </div>
        
    )
}

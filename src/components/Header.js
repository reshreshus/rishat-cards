import React from 'react'
import RishatCardsLogo from './RishatCardsLogo';
import GameExplanation from './GameExplanation';

export default function Header() {
    return (
        <div className="container header">
            <div className="row m-3">
                {/* <div className="mr-5"> */}
                    <RishatCardsLogo  />    
                {/* </div> */}
                
                <GameExplanation />
            </div>
        </div>
    )
}

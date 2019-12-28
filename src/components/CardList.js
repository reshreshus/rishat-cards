import React, { Component } from 'react'


import {ProductConsumer} from '../context';

import Card from './Card';

export default class CardList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <ProductConsumer>
                                { (value) => {
                                    return value.cards.map( card => {
                                        return <Card key={card.id} card={card} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

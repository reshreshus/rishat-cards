import React, { Component } from 'react'
import {storeCards, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        cards: [],
        detailProduct,
        modelOpen: false,
        modelProduct: detailProduct,
    }

    componentDidMount() {
        this.setCards();
    }


    setCards = () => {
        //copy each item
        let cards = [];
        storeCards.forEach(item => {
            cards = [...cards, {...item}]
        })
        this.setState(() => {
            return {cards}
        })
    }

    getItem = id => {
        return this.state.cards.find(item => item.id === id);
    }

    handleDetail = (id) => {
         const product = this.getItem(id);
         this.setState(()=>{
             return {detailProduct: product}
         });

    };


    openModel = id => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {
                modelProduct: product,
                modelOpen: true
            };
        });
    }

    closeModel = () => {
        this.setState(() => {
            return {
                modelOpen: false
            };
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                openModel: this.openModel,
                closeModel: this.closeModel
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};

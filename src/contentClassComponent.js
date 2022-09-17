import React, { Component } from "react";

export default class ContentComponent extends Component {
    constructor(props) {
        super(props);
        this.item = { id: 'm001', category: "Mobile", brand: 'Samsung', model: 'A53', price: 39999.00 }
        this.state = {count: 0 }
        this.deleteItem=this.deleteItem.bind(this); // function/method must bond within the contructor
        this.addItem=this.addItem.bind(this);
    }


    render() {
        return (
            <div className="content">Item
                <ul>Category:{this.item.category}</ul>
                <ul>Brand:{this.item.brand}</ul>
                <ul>Model:{this.item.model}</ul>
                <ul>Price:{this.item.price}</ul>
                {<button disabled={this.state.count===0} onClick={this.deleteItem}>-</button>}
                <button>{this.state.count}</button>
                {<button  disabled={this.state.count===5} onClick={this.addItem}>+</button>}

                {<ul>Cart Total:({this.item.price}*{this.state.count})</ul>}
            </div>
        )
    }

    deleteItem() {
        if(this.state.count>0){
        this.setState({
    count: this.state.count-1
   })
    }
    }
    
    addItem() {
        this.setState({
            count: this.state.count+1
                })
    }
}
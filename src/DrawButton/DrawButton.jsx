import React, { Component } from 'react';
import './DrawButton.css'

class DrawButton extends Component {
    constructor(props){
        super(props);

        this.DrawCard = this.DrawCard.bind(this);

    }

    DrawCard(){
        this.props.DrawCard();
    }

    render(props){
        return(
            <div className="ButtonContainer">
                <button className="btn" onClick={this.DrawCard} > DrawCard </button>
            </div>
        )
    }
}

export default DrawButton
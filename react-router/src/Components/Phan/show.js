import React, { Component } from 'react';

class Show extends Component{
    render(){
        return(
            <div>
                <hr />
                <h1>{this.props.item.name}</h1>
                <h1>{this.props.item.price}</h1>
            </div>
        );
    }
}
export default Show;
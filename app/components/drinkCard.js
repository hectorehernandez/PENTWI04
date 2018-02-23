import React, { Component } from 'react';

export class DrinkCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="column is-one-quarter">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                                <img src={this.props.drink.thumbNail} alt="Placeholder image"></img>
                            </figure>
                        </div>
                        <div className="card-content">
                            <p className="title is-6">{this.props.drink.name}</p>
                        </div>
                    </div>
                </div>
    }

}
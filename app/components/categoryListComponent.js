import ReactDom from 'react-dom';
import React, { Component } from 'react';

export class CategoryListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleDropdown: false
        };
        
        console.log('List Built');
    }

    setSelectedCategory(category){
        this.toggleDropdown();
        this.props.onSelectedChange(category);
    }

    toggleDropdown(){
        this.state.toggleDropdown = !this.state.toggleDropdown;
        this.setState(this.state);
    }

    render() {
        return (<div className="container">
        <div className={ this.state.toggleDropdown ? 'dropdown is-active' : 'dropdown'}>
            <div className="dropdown-trigger" onClick={this.toggleDropdown.bind(this)}>
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span>Select a Category</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    {this.props.categories.map(dto=> (<a href="#" className="dropdown-item" key={dto.id} onClick={this.setSelectedCategory.bind(this, dto.name)}>{dto.name}</a>))}
                </div>
            </div>
        </div>
    </div>);
    };
}
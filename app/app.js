import ReactDom from 'react-dom';
import React, { Component } from 'react';
import DrinkService from './services/drinkService';
import { CategoryListComponent } from './components/categoryListComponent';
import { DrinkCard } from './components/drinkCard';

export class App extends Component {

    constructor(props) {
        super(props);
        this.drinkService = new DrinkService();
        this.state = {
            categories: [],
            selectedCategory: '',
            drinks: []
        };
    }

    onSelectedChange(category) {
        this.loadDrinksByCategory(category);
    }

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories() {
        this.drinkService.getCategories().subscribe(response => {
            this.state.categories = response;
            this.setState(this.state);
        });
    }

    loadDrinksByCategory(category){
        this.drinkService.getDrinksByCategory(category).subscribe(response => {
            this.state.selectedCategory = category;
            this.state.drinks = response;
            this.setState(this.state);
        });
    }

    render() {
        return (<section className='section'>
                    <CategoryListComponent categories={this.state.categories} onSelectedChange={this.onSelectedChange.bind(this)} />
                    <div className="container">
                        <section className="hero">
                            <div className="hero-body">
                                <div className="container">
                                    <h1 className="title">
                                        {this.state.selectedCategory}
                                    </h1>
                                </div>
                            </div>
                        </section>
                        <div id="category-drinks" className="container">
                            <div className="columns is-multiline">
                                {this.state.drinks.map(dto => (<DrinkCard key={dto.id} drink={dto} />))}
                            </div>
                         </div>
                    </div>
    </section>);
    }

}

ReactDom.render(<App/>, document.getElementById('root'));
import React, {Component} from 'react'
import CardList from './Components/CardList/CardList';
import {robots} from './Data/robots';
import SearchBox from './Components/SearchBox/SearchBox';

class App extends Component {

    constructor() {
        super();
        this.state = {
            'robots': robots,
            'search': ''
        };
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    render() {
        const {robots} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
        });
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}></CardList>
            </div>
        )
    }
}

export default App;
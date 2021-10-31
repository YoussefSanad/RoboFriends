import React, {Component} from 'react'
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from "./Components/Scroll/Scroll";

class App extends Component {

    constructor() {
        super();
        this.state = {
            'robots': [],
            'search': ''
        };
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    render() {
        const {robots} = this.state;
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return !robots.length ? <h2>Loading...</h2> :
            (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
    }

}

export default App;
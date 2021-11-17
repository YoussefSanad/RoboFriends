import React, {useState, useEffect} from 'react'
import CardList from './Components/CardList/CardList';
import SearchBox from './Components/SearchBox/SearchBox';
import Scroll from "./Components/Scroll/Scroll";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";

const App = () => {
    const [robots, setRobots] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users));
    });

    const onSearchChange = (event) => {
        setSearch(event.target.value);
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(search.toLowerCase());
    });

    return !robots.length ? <h2>Loading...</h2> :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        )

}

export default App;
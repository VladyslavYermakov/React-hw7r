import { Component } from 'react';
import TaskList from './components/TaskList';

class App extends Component {
    render(){
        return(
            <div className='App'>
                <h2>HELLO CHAT</h2>
                <TaskList/>
            </div> 
        )
    }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import LoginForm from "./components/LoginForm"
import DisplayVehicles from "./components/DisplayVehicles"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import Components from 'laravel-mix/src/components/Components';

function App() {
    return (  
        <Router className = "container">
            <Header />
            <Switch>
                <Route exact path = "/">             
                    <LoginForm />                
                    
                </Route>

                <Route path = "/display" >           
                   <DisplayVehicles/>
                  
                </Route>
                
            </Switch>
        </Router>
        
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}

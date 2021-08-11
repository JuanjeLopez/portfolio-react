import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import App from '../App'
import './NavBar.styles.css'

const NavBar = () => {

    

    return(
        <Router>            
            <div className='navbar'>
                <a className='header' href="https://juanjelopezportfolio.es/">Portfolio Principal</a>
                
                <div className='links'>
            
                    <Link to='/home'>Palabrería</Link>
                
                    <Link to='/store'>Store</Link>
                    
                       
                </div>

            </div>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/store" component={App} />
                <Route exact path="" component={Home} />
            </Switch>            
        </Router>
            
    )
}

export default NavBar
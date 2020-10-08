import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import GaheeApp from './component/ygh/GaheeApp'
import HoonApp from './component/rsh/HoonApp'
import Header from './component/temple/Header'
import Footer from './component/temple/Footer'

class AppRoute extends Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path={'/'} component={GaheeApp} />
                        <Route path={'/rsh'} component={HoonApp} />                
                    </Switch>
                    <Footer/>
                </Router>
            </React.Fragment>
        )
    }
}

export default AppRoute
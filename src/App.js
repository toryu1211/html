import React,{Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Main from './component/main'
import GaheeApp from './component/ygh/GaheeApp'
import HoonApp from './component/rsh/HoonApp'

const App=()=>{
    return(
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path={'/'} component={Main} />
                    <Route exact path={'/ygh'} component={GaheeApp} />
                    <Route path={'/rsh'} component={HoonApp} />                
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App
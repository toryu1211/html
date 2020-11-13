import React,{Component} from 'react'
import Header from './temple/Header'
import Footer from './temple/Footer'

const GaheeApp=()=>{
        return(
            <React.Fragment>
                <Header />
                {/* <Router>
                    <Switch>
                        <Route exact path={'/ygh/about'} component={} />
                        <Route exact path={'/ygh/portfolio'} component={} />
                        <Route path={'/ygh/contact'} component={} />                
                    </Switch>
                </Router> */}
                <Footer />
            </React.Fragment>
        )
}

export default GaheeApp;
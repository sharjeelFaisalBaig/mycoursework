import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch

} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { Navigation } from './Navigation';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import OrderNow from './OrderNow';
import Contact from './Contact';
import TermsCondition from './TermsCondition';
const locations = createBrowserHistory();
const AppRoutes = () => (
    <>
        <Router history={locations}>
            <div>
                <Navigation histor={locations} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/About' component={About} />
                    <Route path='/TermsCondition' component={TermsCondition} />
                    <Route path='/OrderNow' component={OrderNow} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        </Router>
    </>
)
export { AppRoutes };
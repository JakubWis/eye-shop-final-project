import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer'; 

//for routes
import home from './containers/Home/Home';
import product from './containers/Product/Product';
import cart from './containers/Cart/Cart';
import regulamin from './components/Regulations/Regulations';
import kontakt from './components/Contact/Contact';
import faq from './components/FAQ/FAQ';

const app = (
    <BrowserRouter>
        <App>
        <Switch>
            <Route exact path={'/'} component={home}/>
            <Route exact path={'/faq'} component={faq}/>
            <Route exact path={'/regulamin'} component={regulamin}/>
            <Route exact path={'/kontakt'} component={kontakt}/>
            <Route exact path={'/product/:id'} component={product}/>
            <Route exact path={'/cart'} component={cart}/>
            <Redirect to="/" />
        </Switch>
        </App>
    </BrowserRouter>
);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}>{app}</Provider> , document.getElementById('root'));



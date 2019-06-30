import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import { AnimatedSwitch } from 'react-router-transition';


//For routes
import home from './containers/Home/Home';
import product from './containers/Product/Product';
import cart from './containers/Cart/Cart';
import regulations from './components/Regulations/Regulations';
import contact from './components/Contact/Contact';
import faq from './components/FAQ/FAQ';
import login from './components/Login/Login';
import register from './components/Register/Register';
import profile from './components/Profile/Profile';

/*I was forced to use Switch and AnimatedSwitch at the same time,
  because Redirect dosen't work inside AnimatedSwitch :(
  Still doesen't work as I would like it to work, 
  but at least it shows empty site with navigator,
  so that user can switch between sites using nav. */ 
const app = (
    <BrowserRouter>
        <App>
            <Switch >
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 1 }}
                    atActive={{ opacity: 1 }} 
                    className="animated-switch"
                >
                    <Route exact path={'/'} component={home}/>
                    <Route exact path={'/faq'} component={faq}/>
                    <Route exact path={'/regulamin'} component={regulations}/>
                    <Route exact path={'/kontakt'} component={contact}/>
                    <Route exact path={'/product/:id'}component={product}/>
                    <Route exact path={'/cart'} component={cart}/>
                    <Route exact path={'/login'} component={login}/>
                    <Route exact path={'/register'} component={register}/>
                    <Route exact path={'/profile'} component={profile}/>
                </AnimatedSwitch>
            </Switch>
        </App>
    </BrowserRouter>
);

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}>{app}</Provider> , document.getElementById('root'));



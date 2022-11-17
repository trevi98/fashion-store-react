import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./components/Home/Home.css";
import "./components/Navbar/Navbar.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { createStore, applyMiddleware, compose } from "redux";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Auth from "./components/Auth/Auth";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
const store = createStore(reducer, compose(applyMiddleware(thunk)));
function App() {
    const [signIn, setSignIn] = useState("Sing In");
    return (
        <>
            <BrowserRouter>
                <Navbar signIn={signIn} />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/auth" exact>
                        <Auth setSignIn={setSignIn} />
                    </Route>
                    <Route path="/product" exact>
                        <Product />
                    </Route>
                    <Route path="/cart" exact>
                        <Cart />
                    </Route>
                    {/* <Route path="/auth" component={Auth} />
                    <Route path="/product" component={Product} /> */}
                </Switch>
                <Footer />
            </BrowserRouter>
        </>
    );
}
if (document.getElementById("App")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("App")
    );
}

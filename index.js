import React from "react";
import App from "./components/App.js"
import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./reducres";
import thunk from "redux-thunk"
const root =createRoot(document.querySelector("#root"));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));


root.render(<Provider store={store}><App/></Provider>)


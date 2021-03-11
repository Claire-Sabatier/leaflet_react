import './App.css';
import React from 'react'
import Map from './Map'
import mapContext from "./context_reducer/mapContext"
import { useReducer } from 'react'
import mapReducer from './context_reducer/mapReducer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const App = () => {

    const { state, dispatch } = useReducer(mapReducer, {})

    return <>
        <mapContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <Route path="/test">
                        <Redirect to="/" />
                    </Route>
                    <Route path="/">
                        <Map></Map>
                    </Route>
                </Switch>
            </Router>
        </mapContext.Provider>
    </>
}

export default App
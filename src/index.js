import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'
import makeInspectable from 'mobx-devtools-mst'
import { applySnapshot, onSnapshot } from 'mobx-state-tree'

import { RootStore } from './stores/RootStore'
import { initialState } from './stores'

const rootStore = RootStore.create(initialState)

// add persistence
if (localStorage.getItem('toPlayStore') !== null) {
  applySnapshot(rootStore, JSON.parse(localStorage.getItem('toPlayStore')))
}

onSnapshot(rootStore, snapshot => {
  localStorage.setItem('toPlayStore', JSON.stringify(snapshot))
  // console.log('current snapshot: ', snapshot)
})

// use MST-specific tools in 
makeInspectable(rootStore)

ReactDOM.render(
    <Provider store={rootStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

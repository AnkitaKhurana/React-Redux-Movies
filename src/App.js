import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import createStore from './store/store';
import Table from './components/Table'

const store = createStore;

const App = () => (
	<Provider store={store}>
	<div className="App">
	<header className="App-header">
	<h1 className="App-title">Movies</h1>
	</header>
	<div className="App-intro">
		<Table/>
	</div>    
	</div>
	</Provider>
	);

	export default App;

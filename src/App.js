import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { Header } from './components/Header';
import { Watchlist } from './components/Watchlist';
import { Watched } from './components/Watched';
import { Add } from './components/Add';
import { GlobalProvider } from './context/GlobalState';

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Header />

				<Switch>
					<Route path='/' exact component={Watchlist} />
					<Route path='/watched' component={Watched} />
					<Route path='/add' component={Add} />
				</Switch>
			</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;

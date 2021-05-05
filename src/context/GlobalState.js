import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

const initialState = {
	watchlist: localStorage.getItem('watchlist')
		? JSON.parse(localStorage.getItem('watchlist'))
		: [],
	watched: localStorage.getItem('watched')
		? JSON.parse(localStorage.getItem('watched'))
		: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
		localStorage.setItem('watched', JSON.stringify(state.watched));
	}, [state]);

	//actions
	const addMovieToWatchlist = (movie) => {
		dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
	};

	const removeMovieFromWatchlist = (id) => {
		dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
	};

	const addMovieToWatched = (movie) => {
		dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
	};

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addMovieToWatchlist,
				removeMovieFromWatchlist,
				addMovieToWatched,
			}}>
			{props.children}
		</GlobalContext.Provider>
	);
};

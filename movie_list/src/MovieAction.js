import MovieDispatcher from './MovieDispatcher';

var MovieAction = {
	addMovies(newMovies) {
		MovieDispatcher.dispatch({
			action: 'ADD_NEW_MOVIES',
			payload: newMovies
		});
	},

	addFavorite(favorite){
		console.log('MovieAction', 'addFavorite', favorite);
		MovieDispatcher.dispatch({
			action: 'ADD_NEW_FAVORITE',
			payload: favorite
		});
	},

	removeFavorite(favorite) {
		MovieDispatcher.dispatch({
			action: 'REMOVE_FAVORITE',
			payload: favorite
		});
	}

};

module.exports = MovieAction;
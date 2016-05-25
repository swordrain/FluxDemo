import Flux , {Dispatcher} from 'flux';
import MovieStore from './MovieStore';

var MovieDispatcher = new Dispatcher();
MovieDispatcher.register((action) => {
	console.log('call in Dispatcher');
	switch(action.action){
		case 'ADD_NEW_MOVIES': 
			console.log('match action');
			MovieStore.addMoviesObject(action.payload);
			MovieStore.emitMovieChange();
			break;
		case 'ADD_NEW_FAVORITE':
			MovieStore.addFavorite(action.payload);
			MovieStore.emitFavoriteChange();	
			break;
		case 'REMOVE_FAVORITE':
			MovieStore.removeFavorite(action.payload);
			MovieStore.emitFavoriteChange()
			break;
	}
})




module.exports = MovieDispatcher;
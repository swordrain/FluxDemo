import {EventEmitter} from 'events';
import assign from 'object-assign';

var MovieStore = assign({}, EventEmitter.prototype, {
	movies: [],
	currentMaxNumber: 0,
	favorites: [],

	getMovies() {
		return this.movies;
	},

	getCurrentMaxNumber() {
		return this.currentMaxNumber;
	},

	getFavorites() {
		return this.favorites;
	},

	_addMovie(newMovie){
		var duplicated = false;
		for (var index = 0; index < this.movies.length; index++){
			if(this.movies[index].id === newMovie.id){
				duplicated = true;
				break;
			}
		}
		if(!duplicated){
			this.movies.push(newMovie);
		}
	},

	addMovies(newMovies, currentMaxNumber){
		this.currentMaxNumber = currentMaxNumber;
		newMovies.forEach((newMovie)=>{
			this._addMovie(newMovie);
		});
		console.log(this.movies);
	},

	addMoviesObject(data){

		this.addMovies(data.subjects,  data.start + data.count);
	},


	addFavorite(newFavorite){
		var duplicated = false;
		for (var index = 0 ; index < this.favorites.length; index++){
			if (this.favorites[index].id === newFavorite.id){
				duplicated = true;
				break;
			}
		}
		if(!duplicated){
			this.favorites.push(newFavorite);
		}
	},

	removeFavorite(favorite){
		this.favorites = this.favorites.filter((item)=>{
			return item.id !== favorite.id;
		});
	},

	emitMovieChange() {
		console.log('emit movie change');
		this.emit('movie_change');
	},

	emitFavoriteChange() {
		this.emit('favorite_change');
	},

	addMovieChangeListener(callback){
		console.log('addMovieChangeListener');
		this.on('movie_change', callback);
	},

	removeMovieChangeListener(callback){
		this.removeListener('movie_change', callback);
	},

	addFavoriteChangeListener(callback){
		this.on('favorite_change', callback);
	},

	removeFavoriteChangeListener(callback){
		this.removeListener('favorite_change', callback);
	}



});
module.exports = MovieStore;
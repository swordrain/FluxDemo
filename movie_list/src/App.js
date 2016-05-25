import React, {Component} from 'react';
import Header from './Component/Header';
import MovieStore from './MovieStore';
import LoadMovieButton from './Component/LoadMovieButton';
import MovieAction from './MovieAction';
import ajax from 'superagent';
import MovieList from './Component/MovieList';
import FavoriteList from './Component/FavoriteList';

export default class App extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			movies: MovieStore.getMovies(),
			currentMaxNumber: MovieStore.getCurrentMaxNumber(),
			favorites: MovieStore.getFavorites(),
			loading: false
		}
	}


	componentDidMount() {
		MovieStore.addMovieChangeListener(this._onMovieChange.bind(this));
		MovieStore.addFavoriteChangeListener(this._onFavoriteChange.bind(this));
	}

	componentWillUnmount() {
		MovieStore.removeMovieChangeListener(this._onMovieChange.bind(this));
		MovieStore.removeFavoriteChangeListener(this._onFavoriteChange.bind(this));
	}
	_onMovieChange() {
		console.log("_onMovieChange");
		this.setState({
			movies: MovieStore.getMovies(),
			currentMaxNumber: MovieStore.getCurrentMaxNumber()
		});
		console.log('state', this.state);
	}

	_onFavoriteChange() {
		this.setState({
			favorites: MovieStore.getFavorites()
		});
		console.log(this.state.favorites);
	}

	loadMovie() {
		console.log('call function');
		//MovieAction.addMovies([{id: Math.random(), name: new Date()}]);
		/*var url = "http://localhost:8080/data" + this.state.currentMaxNumber + '.json';
		fetch(url).then((response) => response.json())
			.then((data) => {
				console.log(data);
				MovieAction.addMovies(data);
			})*/
		this.setState({
			loading: true
		});
		fetch("http://localhost:3000/v2/movie/top250?start=" + this.state.currentMaxNumber)
		.then((response) => response.json())
		.then((data)=> {
			console.log(data);
			MovieAction.addMovies(data);
			this.setState({
				loading: false
			});
		})

	}

	addFavorite(movie) {
		//MovieAction.
		console.log(arguments);
		MovieAction.addFavorite(movie);
	}

	removeFavorite(movie) {
		MovieAction.removeFavorite(movie);
	}

	render() {
		
		console.log(this.state.currentMaxNumber);

		return (
			<div>
			<Header />
			<LoadMovieButton loadMovie={this.loadMovie.bind(this)} loading={this.state.loading} reachMax={this.state.currentMaxNumber >=250}/>
			<hr />
			<div style={{display:'flex', flexDirection:'row', width: '100%'}}>
				<MovieList style={{flex: 1, padding: 20, height: 500, overflowY: 'auto'}} movies={this.state.movies} addFavorite={this.addFavorite.bind(this)} />
				<FavoriteList style={{flex:1, padding: 20, height: 500, overflowY: 'auto'}} favorites={this.state.favorites} removeFavorit={this.removeFavorite.bind(this)}/>	
			</div>
			</div>
			)
		}
	}
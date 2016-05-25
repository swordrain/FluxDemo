import React , {Component} from 'react';

export default class LoadMovieButton extends Component{
	render() {
		console.log('reachMax',this.props.reachMax);
		var text = this.props.loading? 'Loading' : 'Load Movie';
		return (<button style={{marginLeft: 20}} className='btn btn-primary' onClick={this.props.loadMovie} disabled={(this.props.reachMax?true:false)||this.props.loading}>{text}</button>)

	}
}
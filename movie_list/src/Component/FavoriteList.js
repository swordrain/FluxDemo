import React, {Component} from 'react';

export default class FavoriteList extends Component{
	render() {
		return (

			<div style={this.props.style}>
			<h2>Favorite List</h2>
			<ul className='list-group'>
				{
					this.props.favorites.map((item)=>{
						return <li className='list-group-item' style={{cursor: 'pointer'}} onClick={this.props.removeFavorit.bind(event, item)}>{item.title}</li>
					})
				}

			</ul></div>)
	}
}
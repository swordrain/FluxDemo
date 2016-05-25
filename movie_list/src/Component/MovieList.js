import React, {Component} from 'react';

export default class MovieList extends Component{

	render() {
		var self = this;
		/*var list = this.props.movies.map((item)=>{
						console.log(this.props.addFavorite);
						return <li className='list-group-item' style={{'cursor': 'pointer' }} onClick={this.props.addFavorite.bind(event, item)}>{item.title}</li>
					});*/
		
		var list = this.props.movies.map((item)=>{
			return (
				<div className="panel panel-success">
  					<div className="panel-heading">
  						<a target="_blank" href={item.alt}>{item.title}({item.original_title})</a> - {item.year} / {item.rating.average}

  						<button className='btn btn-xs btn-default pull-right' onClick={this.props.addFavorite.bind(event, item)}>Add to favorites</button>
  					</div>
  					<div className="panel-body">
  						<div className='pull-left'>
  							<h5>Directors</h5>
  							{
  								item.directors.map((director)=>{
  									return (<a target="_blank" href={director.alt}><img src={director.avatars?director.avatars.small:''} alt={director.name} title={director.name}/></a>)
  								})
  							}
  						</div>
  						<div className='pull-right'>
  						<h5>Casts</h5>
    					{item.casts.map((cast)=>{
    						return (<a target="_blank" href={cast.alt}><img src={cast.avatars?cast.avatars.small:''} alt={cast.name} title={cast.name}/></a>)	
    					})}
    					</div>
  					</div>
				</div>
				)
		});

		return (
			<div style={this.props.style}>
			<h2>Movie List</h2>
			{list}
			
			</div>
			)
	}
}
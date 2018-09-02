import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Movie extends Component {


  render() {
    const { movie } = this.props;
    return (

     <tr>
     <td>{movie.movie_title}</td>
     <td>{movie.director_name}</td> 
     <td>{movie.actor_1_name}</td>
     <td>{movie.actor_2_name}</td>
     <td>{movie.genres}</td> 
     <td>{movie.language}</td>
     <td>{movie.country}</td>
     <td>{movie.content_rating}</td> 
     <td>{movie.budget}</td>
     <td>{movie.title_year}</td>
     <td>{movie.plot_keywords}</td>
     <td>{movie.movie_imdb_link}</td>     
     </tr>    

     );
   }
 }

 Movie.propTypes = { 
  movie: PropTypes.object.isRequired
};


export default (Movie);

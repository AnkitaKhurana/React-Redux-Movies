import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Movie from '../components/Movie'
import {
  getMovies
} from '../actions/actions';


export class Table extends Component {

  componentWillMount(){
    this.props.getMovies();

  }  
 componentWillReceiveProps(nextProps) {
   console.log(nextProps)
    }
 render(){
   return(
    <table>
    <thead>
     <tr>
      <th>movie_title</th>
      <th>director_name</th> 
      <th>actor_1_name</th>
       <th>actor_2_name</th>
      <th>genres</th> 
      <th>language</th>
      <th>country</th>
      <th>content_rating</th> 
      <th>budget</th>
      <th>title_year</th>
      <th>plot_keywords</th>
      <th>movie_imdb_link</th>       
      </tr>
      </thead>
      <tbody> 
          {this.props.movies.map((movie,index )=>
            <Movie key={index} movie={movie}/>)
          }
          </tbody> 
          </table>
    );
 }

}

Table.propTypes = { 
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMovies: PropTypes.func.isRequired  
};

const mapDispatchToProps = {
  getMovies  
};
const mapStateToProps = state => ({
  movies: state.admin.movies 
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
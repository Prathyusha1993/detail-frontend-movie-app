import Joi from 'joi-browser';
import React from 'react';
import Form from './common/form';
import { getGenres } from '../services/fakeGenreService';
import { getMovie, saveMovie } from '../services/fakeMovieService';

class MovieForm extends Form {
    state = { 
        data: { title:'', genreId:'', stock:'', rate:''},
        errors:{},
        genres:[]
     };
    
    schema={
        id:Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        stock: Joi.number().required().min(0).max(100).label('Stock'),
        rate: Joi.number().required().min(0).max(10).label('Rate'),
    };

    componentDidMount() {
        const genres  = getGenres();
        this.setState({ genres });

        const movieId = this.props.match.params.id;
        if(movieId === 'new') return;

        const movie = getMovie(movieId);
        if(!movie) return this.props.history.replace('/not-found');

        this.setState({ data: this.mapToViewModel(movie) });
    };

    mapToViewModel(movie) {
       return{
        id: movie.id,
        title: movie.title,
        genreId: movie.genre.id,
        stock: movie.stock,
        rate: movie.rate
       };
    }

    doSubmit = () => {
        saveMovie(this.state.data);
        this.props.history.push('/movies');
    }

    render() { 
        return (
            <div>
            <h1>MovieForm New</h1>
            <form onSubmit={this.handleSubmit}>
                {this.renderInput('title', 'Title')}
                {this.renderSelect('genreId', 'Genre', this.state.genres)}
                {this.renderInput('stock', 'Stock', 'number')}
                {this.renderInput('rate', 'Rate')}
                {this.renderButton('Save')}
            </form>
            </div>
        );
    }
}
 
export default MovieForm;
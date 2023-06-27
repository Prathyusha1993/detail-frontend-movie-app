import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviePagination from "./common/moviePagination";
import { paginate } from "../utils/paginate";
import MovieListGroup from "./common/movieListGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from 'lodash';
import {Link} from 'react-router-dom';
import SearchBox from "./common/searchBox";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pageSize: 4,
      currentPage: 1,
      genres: [],
      searchQuery:'',
      selectedGenre: null, 
      sortColumn: { path: 'title', order: 'asc'}
    };
  }

  componentDidMount() {
    const genres = [{ id:'', name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  }

  handleLike = (movie) => {
    console.log("like clicked");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    console.log(page, "pagination clicked");
    this.setState({ currentPage: page });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState({ movies });
  };

  handleGenreSelect = (genre) => {
    console.log(genre);
    this.setState({ selectedGenre: genre, searchQuery:'', currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    // console.log(path);
    
    this.setState({ sortColumn })
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  }

  getpagedData = () => {
    const {
        pageSize,
        currentPage,
        selectedGenre,
        sortColumn,
        movies: allMovies,
        searchQuery
      } = this.state;
      
    let filtered = allMovies;
    if(searchQuery)
    filtered = allMovies.filter(m => 
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase()));
        else if(selectedGenre && selectedGenre.id)
            filtered = allMovies.filter(m => m.genre.id === selectedGenre.id)


    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return {totalCount: filtered.length, data: movies};
  };

  render() {
    const { lenght: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery,
      movies: allMovies,
    } = this.state;
    if (this.state.movies.length === 0)
      return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getpagedData();
    
    return (
      <div className="row">
        <div className="col-3">
          <MovieListGroup
            items={this.state.genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
            <Link to='/movies/new' className="btn btn-primary" style={{marginTop: '20px'}}>New Movie</Link>
          <p>showing {totalCount} in the database.</p>
          <SearchBox value={searchQuery} onChange={this.handleSearch}/>
          <MoviesTable 
          movies={movies}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}/>
          <MoviePagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
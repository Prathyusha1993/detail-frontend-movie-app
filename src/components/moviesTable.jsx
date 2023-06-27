import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title", content: movie => <Link to={`/movies/${movie.id}}`}>{movie.title}</Link> },
    { path: "genre.name", label: "Genre" },
    { path: "stock", label: "Stock" },
    { path: "rate", label: "Rate" },
    {
      key: "like",
      content: (row) => (
        <Like liked={row.liked} onClick={() => this.props.onLike(row)} />
      ),
    },
    {
      key: "delete",
      content: (row) => (
        <button
          onClick={() => this.props.onDelete(row)}
          style={{
            border: "none",
            margin: "0px 10px 0px 50px",
            background: "transparent",
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
          }}
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;

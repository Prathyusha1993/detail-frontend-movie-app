import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortColumn = column => {
    if(column.path !== this.props.sortColumn.path) return null;
    if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc" aria-hidden='true'></i> 
    return <i className="fa fa-sort-desc" aria-hidden='true'></i> 
  }
  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
            className="clickable"
            style={{cursor: 'pointer'}}
              style={{ padding: "0 0 0 100px" }}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortColumn(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

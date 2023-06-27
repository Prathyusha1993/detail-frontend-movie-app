import React, { Component } from 'react';

//Input: liked; boolean
//output: onClick

class Like extends Component {
    state = {  } 
    render() { 
        let classes = 'fa fa-heart';
        if(!this.props.liked) classes += '-o';
        return (
            <i onClick={this.props.onClick} style={{marginLeft: '50px', cursor: 'pointer'}} className={classes} aria-hidden="true"></i>
        );
    }
}
 
export default Like;
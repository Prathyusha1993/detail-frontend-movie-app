import React from 'react';

const input = ({ name, label, error, ...rest }) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name} className="form-label">
              {label}
            </label>
            <input
              autoFocus
              {...rest}
              name={name}
              className="form-control"
              id={name}
            />
            {error && <div className='alert alert-danger'>{error}</div>}
          </div>
     );
}
 
export default input;
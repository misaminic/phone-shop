import React from 'react';

const Error = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto text-cennter text-title text-uppercase pt-5">
          <h1 className="display-3">404</h1>
          <h1>Error</h1>
          <h2>Page not found</h2>
          <h3>the requested URL</h3>
          <span className="text-danger">{props.location.pathname}</span>was not
          found
        </div>
      </div>
    </div>
  );
};

export default Error;

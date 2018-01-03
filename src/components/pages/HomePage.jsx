import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HomePage = props => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/login" >Login</Link>
    </div>
  );
};

HomePage.propTypes = {
  
};
import React from 'react';
import { NavLink } from 'react-router-dom';

import { categories } from '../data/data';

function Nav(props) {
    categories.map( ()
    return (
      <NavLink to="/:name"></NavLink>
    );
    )
  }
  
  export default App;
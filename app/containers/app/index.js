import React from 'react';
import { Link } from 'react-router';

import Menu from '../../components/menu';

const App = (props) => (<div>
  <Menu>
    <Link to={ { pathname: '' } } className="header item">Home</Link>
    <Link to={ { pathname: 'todos' } } className="item">Todos</Link>
  </Menu>
  <div className="ui main container" style={ { paddingTop: '4em' } }>
    { props.children }
  </div>
</div>);

App.propTypes = {
  children: React.PropTypes.node
};

export default App;

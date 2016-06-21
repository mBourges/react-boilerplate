import React from 'react';

const Menu = ({ children }) => (<div className="ui fixed inverted menu">
  <div className="ui container">
    { children }
  </div>
</div>);

Menu.propTypes = {
  children: React.PropTypes.node
};

export default Menu;

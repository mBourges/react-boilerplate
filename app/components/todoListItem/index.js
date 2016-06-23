import React from 'react';
import classNames from 'classnames';

const TotoListItem = ({ Title, Completed }) => {
  const itemClassName = classNames('item', {
    completed: Completed
  });

  return (<li className={ itemClassName }>
    { Title }
  </li>);
};

TotoListItem.propTypes = {
  Title: React.PropTypes.string,
  Completed: React.PropTypes.bool
};

export default TotoListItem;

import React from 'react';
import classNames from 'classnames';

const TotoListItem = ({ Title, Completed }) => {
  const itemClassName = classNames('item', {
    completed: Completed
  });

  return (<div className={ itemClassName }>
    { Title }
  </div>);
};

TotoListItem.propTypes = {
  Title: React.PropTypes.string,
  Completed: React.PropTypes.bool
};

export default TotoListItem;

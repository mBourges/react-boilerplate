/* eslint-disable no-unused-expressions, no-undef */

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import TotoListItem from './index';

describe('Todo List Item', () => {
  it('should display uncompleted todo', () => {
    const renderer = ReactTestUtils.createRenderer();
    renderer.render(<TotoListItem Title="todo 1" Completed={ false } />);
    const todoListItem = renderer.getRenderOutput();

    console.log('todoListItem', todoListItem.className);
    expect(todoListItem.type).to.equal('div');
  });
});

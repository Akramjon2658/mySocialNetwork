import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div)
});

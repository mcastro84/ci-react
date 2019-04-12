import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-testing-library'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render the text', () => {
		const { getByText } = render(<App />);
		expect(getByText('src/App.js')).toBeFalsy();
});


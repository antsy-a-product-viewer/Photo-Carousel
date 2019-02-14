import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../client/src/components/carousel.jsx';
import { mount, shallow, render, configure } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

configure({adapter: new Adaptor()});

test('renders on the dom', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carousel />, div); //render the entire component
  expect(document.getElementById('Carousel')).toBeDefined(); //check if it's on the dom
  ReactDOM.unmountComponentAtNode(div);
});

test('calls ComponentDidMount after initial mount', () => {
  jest.spyOn(Carousel.prototype, 'componentDidMount'); //watches this function
  shallow(<Carousel />); //Shallow renders the current node and returns a shallow wrapper around it.
  expect(Carousel.prototype.componentDidMount).toHaveBeenCalled();
  Carousel.prototype.componentDidMount.mockRestore(); //this resets the object associated with spyOn above.
  //https://jestjs.io/docs/en/mock-function-api.html#mockfnmockrestore
  //note that it is a super-super version from mockRestore <-- mockReset <--  mockClear
});
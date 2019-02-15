import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../client/src/components/carousel.jsx';
import { mount, shallow, render, configure } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

configure({adapter: new Adaptor()});

describe('Carousel parent module', () => {
  it('Renders fully on the dom', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Carousel />, div); //render the entire component without crashing
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Calls ComponentDidMount after initial mount', () => {
    jest.spyOn(Carousel.prototype, 'componentDidMount');
    shallow(<Carousel />);
    expect(Carousel.prototype.componentDidMount).toHaveBeenCalled();
    Carousel.prototype.componentDidMount.mockRestore(); 
  });

  it('Displays a modal when an image is clicked on', () => {
    jest.spyOn(Carousel.prototype, 'openModal');
    var wrapper = mount(<Carousel />);
    wrapper.find('#scaledimage').simulate('click');
    expect(Carousel.prototype.openModal).toHaveBeenCalled();
    expect(wrapper.find('#modal')).toBeTruthy();
  })

  it('Removes a modal from the DOM when closed', () => {
    jest.spyOn(Carousel.prototype, 'closeModal');
    var wrapper = mount(<Carousel />);
    wrapper.find('#scaledimage').simulate('click');
    wrapper.find('#closemodal').simulate('click');
    expect(Carousel.prototype.closeModal).toHaveBeenCalled();
    expect(wrapper.find('#modal')).toHaveLength(0);
  })

});

describe('Scaled subcomponent', () => {
  //**************** CLICK RESPONSE TESTS ****************
  it('Responds to a click on the favorite button', () => {
    jest.spyOn(Carousel.prototype, 'changeFavorite');
    var wrapper = mount(<Carousel />);
    wrapper.find('#favorite-btn').simulate('click');
    expect(Carousel.prototype.changeFavorite).toHaveBeenCalled();
    Carousel.prototype.changeFavorite.mockRestore();
  });

  it('Navigates forward', () => {
    jest.spyOn(Carousel.prototype, 'cycleBack');
    var wrapper = mount(<Carousel />);
    wrapper.find('#nav-back').simulate('click');
    expect(Carousel.prototype.cycleBack).toHaveBeenCalled();
    Carousel.prototype.cycleBack.mockRestore();
  });

  it('Navigates backwards', () => {
    jest.spyOn(Carousel.prototype, 'cycleForward');
    var wrapper = mount(<Carousel />);
    wrapper.find('#nav-fwd').simulate('click');
    expect(Carousel.prototype.cycleForward).toHaveBeenCalled();
    Carousel.prototype.cycleForward.mockRestore();
  });

  //**************** DISPLAY TESTS ****************
  it('Renders the correct heart patten for an unfavorited item', () => {
    var wrapper = mount(<Carousel />);
    console.log(wrapper.find('path').debug());
    expect(wrapper.containsMatchingElement(
      <path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" />
    )).toEqual(true);
  });

  it('Changes the heart pattern when clicked', () => {
    var wrapper = mount(<Carousel />);
    wrapper.find('#favorite-btn').simulate('click');
    expect(
      wrapper.containsMatchingElement(
        <path d="M 16.5 3 A 6.953 6.953 0 0 0 12 5.051 A 6.912 6.912 0 0 0 7.5 3 C 4.364 3 2 5.579 2 9 c 0 5.688 8.349 12 10 12 S 22 14.688 22 9 C 22 5.579 19.636 3 16.5 3 Z" />
      )).toEqual(true);
  });
});
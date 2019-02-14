import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../client/src/components/modal.jsx';
import { mount, shallow, render, configure } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

configure({adapter: new Adaptor()});

test('renders a modal on the DOM', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal modalActive={true} closeModal={()=>{}} image={'./placeholder.jpg'}/>, div); //render the entire component
  ReactDOM.unmountComponentAtNode(div);
});
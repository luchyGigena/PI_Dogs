import React from 'react';
import { render } from '@testing-library/react';
import * as enzyme from 'enzyme';
import CreateDog  from '../components/CreateDog/CreateDog'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {shallow, mount} from 'enzyme'
import '@testing-library/jest-dom/extend-expect';

enzyme.configure({ adapter: new Adapter() });

describe('<CreateDog /> Mounted', () => {
  let wrapper;
  beforeEach(() => {
    wrapper= mount(<CreateDog />);
  });

  it('El form debe tener un input con name "name" y type "text"', () => {
    const { container } = render(<CreateDog />)
    const element = container.querySelectorAll('input')[0]
    expect(element.type).toBe('text');
    expect(element.name).toBe('name');
  });

  it('El form debe tener un input con name "heightMin" y type "number"', () => {
    const { container } = render(<CreateDog />)
    const element = container.querySelectorAll('input')[1]
    expect(element.type).toBe('number');
    expect(element.name).toBe('heightMin');
  });

 
});

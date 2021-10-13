import App from './App';

import { shallow } from 'enzyme';

describe('Counter testing', () => {
  test('render the title of counter', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('h1').text()).toContain('some info');
  });

  test('render a button with text of `increment`', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })
})

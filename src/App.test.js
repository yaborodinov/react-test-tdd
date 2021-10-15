import React from 'react'

import { shallow } from 'enzyme'

import Counter from './components/Counter'

describe('Counter testing', () => {

  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Counter />)
    console.log(wrapper.debug())
  })
  test('render the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('some info')
  });

  test('render a button with text of `increment`', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment')
  })

  test('render the initial value of state in a div', () => {
    console.log(wrapper.find('#counter-value'))
    expect(wrapper.find('#counter-value').text()).toEqual('0')
  })

  test('render the click event of increment button and increment counter value', () => {
    wrapper.find('#increment-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('1')
  })

  test('render the click event of decrement button and decrement counter value', () => {
    wrapper.find('#decrement-btn').simulate('click')
    expect(wrapper.find('#counter-value').text()).toBe('-1')
  })
})

import React from 'react'
import { mount } from 'enzyme'
import Martino from '../pages/participants/martino'

describe("Martino's page", () => {
  it("displays Martino's name", () => {
    const wrapper = mount(<Martino />)
    expect(wrapper.text().includes('Martino Fenu')).toBe(true)
  })
})
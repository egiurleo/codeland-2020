import React from 'react'
import { mount } from 'enzyme'
import Bianca from '../pages/participants/bianca'

describe("Bianca's page", () => {
  it("displays Bianca's name", () => {
    const wrapper = mount(<Bianca />)
    expect(wrapper.text().includes('Bianca Severino')).toBe(true)
  })
})

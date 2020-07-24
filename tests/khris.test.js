import React from 'react';
import { mount } from 'enzyme';
import Khris from '../pages/participants/khris';

describe("Khris's page", () => {
  it("displays Khris's name", () => {
    const wrapper = mount(<Khris />);
    expect(wrapper.text().includes('Khris Punzalan')).toBe(true);
  });
});

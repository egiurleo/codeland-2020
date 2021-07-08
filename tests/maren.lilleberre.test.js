import React from "react";
import { mount } from 'enzyme';
import Maren from '../pages/participants/maren-lilleberre';

describe("Maren's page", () => {
  it("displays Maren's name", () => {
    const wrapper = mount(<Maren />);
    expect(wrapper.text().includes('Maren Lilleberre')).toBe(true);
  });
});
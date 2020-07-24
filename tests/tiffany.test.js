import React from "react";
import { mount } from 'enzyme';
import Tiffany from '../pages/participants/tiffany';

describe("Tiffany's page", () => {
  it("displays Tiffany's name", () => {
    const wrapper = mount(<Tiffany />);
    expect(wrapper.text().includes('Tiffany')).toBe(true);
  });
});

import React from "react";
import { mount } from 'enzyme';
import Dani from '../pages/participants/dani';

describe("Dani's page", () => {
  it("displays Dani's name", () => {
    const wrapper = mount(<Dani />);
    expect(wrapper.text().includes('Dani Meyer')).toBe(true);
  });
});

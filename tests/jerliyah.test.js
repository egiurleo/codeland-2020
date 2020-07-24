import React from "react";
import { mount } from 'enzyme';
import Jerliyah from '../pages/participants/jerliyah';

describe("Jerliyah's page", () => {
  it("displays Jerliyah's pseudoname", () => {
    const wrapper = mount(<Jerliyah />);
    expect(wrapper.text().includes('::J::')).toBe(true);
  });
});

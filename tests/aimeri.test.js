import React from "react";
import { mount } from 'enzyme';
import Aimeri from '../pages/participants/aimeri';

describe("Aimeri's page", () => {
  it("displays Aimeri's name", () => {
    const wrapper = mount(<Aimeri />);
    expect(wrapper.text().includes('Aimeri Baddouh')).toBe(true);
  });
});

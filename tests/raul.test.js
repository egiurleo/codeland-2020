import React from "react";
import { mount } from 'enzyme';
import Raul from '../pages/participants/raul';

describe("Raul's page", () => {
  it("displays Raul's name", () => {
    const wrapper = mount(<Raul />);
    expect(wrapper.text().includes('Raul Rodriguez')).toBe(true);
  });
});
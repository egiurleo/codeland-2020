import React from "react";
import { mount } from 'enzyme';
import Caleb from '../pages/participants/caleb';

describe("Caleb's page", () => {
  it("displays Caleb's name", () => {
    const wrapper = mount(<Caleb />);
    expect(wrapper.text().includes('Caleb Aviles')).toBe(true);
  });
});
import React from "react";
import { mount } from 'enzyme';
import Chrissy from '../pages/participants/chrissy';

describe("Chrissy's page", () => {
  it("displays Chrissy's name", () => {
    const wrapper = mount(<Chrissy />);
    expect(wrapper.text().includes('Chrissy Gonzalez')).toBe(true);
  });
});

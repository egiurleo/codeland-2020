import React from "react";
import { mount } from 'enzyme';
import Ceora from '../pages/participants/ceora';

describe("Ceora's page", () => {
  it("displays Ceors's name", () => {
    const wrapper = mount(<Ceora />);
    expect(wrapper.text().includes('Ceora Ford')).toBe(true);
  });
});
